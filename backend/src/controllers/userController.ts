import { Context } from 'hono'
import { User } from '../models/UserModel'
import bcrypt from 'bcrypt'

export const addUser = async (c: Context) => {
    try {
        const body = await c.req.json();
        const hashedPasswrod = await bcrypt.hash(body.password, 10);
        const user = new User({
            ...body,
            password: hashedPasswrod,
        });
        await user.save();
        return c.json({ message: 'User created successfully', user });
    } catch (err) {
        return c.json({ error: 'Failed to create user', details: err }, 500);
    }
}

export const getAllUsers = async (c: Context) => {
    try {
        const users = await User.find();
        return c.json(users);
    } catch (err) {
        return c.json({ error: 'Failed to get all users', details: err }, 500);
    }
};

export const getUser = async (c: Context) => {
    try {
        const userId = c.req.param('_id');
        const user = await User.findOne({ _id: userId });
        if (!user) return c.json({ error: 'User not found' }, 404);
        return c.json(user);
    } catch (err) {
        return c.json({ error: 'Error fetching user' }, 500);
    }
}

export const updateUser = async (c: Context) => {
    try {
        const userId = c.req.param('_id');
        const updateData = await c.req.json();
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        updateData['timestamp.updatedOn'] = new Date()
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
            new: true,
            runValidators: true,
        });
        if (!updatedUser) {
            return c.json({ error: 'User not found' }, 404);
        }
        return c.json({ message: 'User updated successfully', user: updatedUser });
    }
    catch (err) {
        return c.json({ error: 'Error updating user' }, 500);
    }
}

export const userDelete = async (c: Context) => {
    try {
        const userId = c.req.param('_id');
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) return c.json({ error: 'User Not found' });
        return c.json({ message: 'User deleted successfully', deletedUser: deletedUser })
    } catch (err) {
        return c.json({ error: 'server message', }, 500)
    }
}

export const toggleStatus = async (c: Context) => {
    try{
        const userId = c.req.param('_id');
        const user = await User.findById(userId);
        if (!user) return c.json({error: 'User Not found'});
        user.isActive = !user.isActive;
        if (user.timestamp) user.timestamp.updatedOn = new Date();
        await user.save();
        return c.json({ message: 'User status updated', isActive: user.isActive });
    } catch (err){
        return c.json({ error: 'Error toggling status' }, 500);
    }
}


export const builkUsersAdd = async (c: Context) => {
  try {
    const users = await c.req.json();
    if (!Array.isArray(users) || users.length === 0) {
      return c.json({ message: "Users not found" }, 400);
    }
    //hashed pass
    const hashedUsers = await Promise.all(users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return {
        ...user,
        password: hashedPassword,
      };
    }));

    const result = await User.insertMany(hashedUsers, { ordered: false });
    return c.json({ message: "Users created successfully", users: result }, 201);
  } catch (err) {
    return c.json({ message: "Server error", error: err }, 500);
  }
}

export const getPaginatedUsers = async (c: Context) => {
    try {
        const pageNumber = parseInt(c.req.query('pn') || '1', 10) == 0 ? 1 : parseInt(c.req.query('pn') || '1', 10);
        const pageSize = parseInt(c.req.query('ps') || '5', 10) == 0 ? 1 : parseInt(c.req.query('ps') || '5', 10);

        if (isNaN(pageNumber) || isNaN(pageSize)) {
            return c.json({ message: 'Page number and size must be valid numbers' }, 400);
        }
    

        const skip = (pageNumber - 1) * pageSize;
        
        const [users, total] = await Promise.all([
            User.find().skip(skip).limit(pageSize),
            User.countDocuments()
        ]);
        if (skip >= total) {
            return c.json({
              message: "Page number exceeds available data.",
              users: [],
              total,
              pageNumber,
              pageSize
            }, 400); 
          }


        return c.json({
            users,
            pagination: {
                page: pageNumber,
                pageSize,
                totalUsers: total,
                totalPages: Math.ceil(total / pageSize)
            }
        });
    } catch (err) {
        return c.json({ error: 'Failed to get paginated users', details: err }, 500);
    }
}

const parseDate = (dateStr: string): Date | null => {
    let d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d;
    const match = dateStr.match(/^(\d{2})-(\d{2})-(\d{4})$/);
    if (match) {
        const [_, dd, mm, yyyy] = match;
        d = new Date(`${yyyy}-${mm}-${dd}T00:00:00.000Z`);
        if (!isNaN(d.getTime())) return d;
    }
    return null;
}

const parseDay = (from: string) => {
    const days = parseInt(from, 10);
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - days);
    return fromDate;
}

export const getUsersByTimeRange = async (c: Context) => {
    try {
        const from = c.req.query('from');
        const to = c.req.query('to') || new Date().toISOString();
        if (!from || !to) {
            return c.json({ message: 'Both from and to query parameters are required.' }, 400);
        }
        const fromDate = /^\d+$/.test(from) ? parseDay(from) : parseDate(from);
        const toDate = parseDate(to);
        if (!fromDate || !toDate) {
            return c.json({ message: 'Invalid date format for from or to. Use DD-MM-YYYY or ISO.' }, 400);
        }
        if (fromDate > toDate) {
            return c.json({ message: 'From date must be before to date.' }, 400);
        }
        const users = await User.find({
            'timestamp.createdOn': {
                $gte: fromDate,
                $lte: toDate
            }
        }).sort({ 'timestamp.createdOn': 1 });
        return c.json({ users, from: fromDate, to: toDate }, 200);
    } catch (err) {
        return c.json({ error: 'Failed to get users by time range', details: err }, 500);
    }
}

export const getUsersSince = async (c: Context, since: string) => {
    try {
        const sinceDate = /^\d+$/.test(since) ? parseDay(since) : parseDate(since);
        if (!sinceDate) {
            return c.json({ message: 'Invalid date format for since. Use DD-MM-YYYY, ISO, or a number for days.' }, 400);
        }
        const users = await User.find({ 'timestamp.createdOn': { $gte: sinceDate } }).sort({ 'timestamp.createdOn': 1 });
        return c.json({ users, since: sinceDate }, 200);
    } catch (err){ 
        return c.json({message:"Server Error", error: err}, 500);
    }
}

export const queryUsers = async (c: Context) => {
    try {
        const { from, to, since, pn, ps } = c.req.query();
        console.log(from, to, since, pn, ps);
        // Paginated (pn or ps present)
        if (pn || ps) {
            return await getPaginatedUsers(c);
        }
        else if (from || to) {    // Time range (from and to present)
            return await getUsersByTimeRange(c);
        }
        else if (since) { // Since (since present)
            return await getUsersSince(c, since);
        }
        // Default: all users
        return await getAllUsers(c);
    } catch (err) {
        return c.json({ error: 'Query failed', details: err }, 500);
    }
}