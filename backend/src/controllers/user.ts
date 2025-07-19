import bcrypt from "bcrypt";
import { Context } from "hono";
import { User } from "../models/user";

export const addUser = async (c: Context) => {
  try {
    const body = await c.req.json();
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = new User({
      ...body,
      password: hashedPassword
    });
    await user.save();
    return c.json({ message: "User created successfully", user });
  } catch (err) {
    return c.json({ error: "Failed to create user", details: err }, 500);
  }
};

export const getAllUsers = async (c: Context) => {
  try {
    const users = await User.find();
    return c.json(users);
  } catch (err) {
    return c.json({ error: "Failed to get all users", details: err }, 500);
  }
};

export const getUser = async (c: Context) => {
  try {
    const userId = c.req.param("_id");
    const user = await User.findOne({ _id: userId });
    if (!user) return c.json({ error: "User not found" }, 404);
    return c.json(user);
  } catch (err) {
    return c.json({ error: "Error fetching user" }, 500);
  }
};

export const updateUser = async (c: Context) => {
  try {
    const userId = c.req.param("_id");
    const updateData = await c.req.json();
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    updateData["timestamp.updatedOn"] = new Date();
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true
    });
    if (!updatedUser) {
      return c.json({ error: "User not found" }, 404);
    }
    return c.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    return c.json({ error: "Error updating user" }, 500);
  }
};

export const userDelete = async (c: Context) => {
  try {
    const userId = c.req.param("_id");
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) return c.json({ error: "User Not found" });
    return c.json({ message: "User deleted successfully", deletedUser: deletedUser });
  } catch (err) {
    return c.json({ error: "server message" }, 500);
  }
};

export const toggleStatus = async (c: Context) => {
  try {
    const userId = c.req.param("_id");
    const user = await User.findById(userId);
    if (!user) return c.json({ error: "User Not found" });
    user.isActive = !user.isActive;
    if (user.timestamp) user.timestamp.updatedOn = new Date();
    await user.save();
    return c.json({ message: "User status updated", isActive: user.isActive });
  } catch (err) {
    return c.json({ error: "Error toggling status" }, 500);
  }
};

export const bulkUsersAdd = async (c: Context) => {
  try {
    const users = await c.req.json();
    if (!Array.isArray(users) || users.length === 0) {
      return c.json({ message: "Users not found" }, 400);
    }
    //hashed pass
    const hashedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return {
          ...user,
          password: hashedPassword
        };
      })
    );

    const result = await User.insertMany(hashedUsers, { ordered: false });
    return c.json({ message: "Users created successfully", users: result }, 201);
  } catch (err) {
    return c.json({ message: "Server error", error: err }, 500);
  }
};

const parseDate = (dateStr: string): Date | null => {
  let d = new Date(dateStr);
  // Match DD-MM-YYYY
  const case1 = dateStr.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  // Match YYYY-MM-DD
  const case2 = dateStr.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);

  if (case1) {
    const [_, dd, mm, yyyy] = case1;
    const day = dd.padStart(2, "0");
    const month = mm.padStart(2, "0");
    d = new Date(`${yyyy}-${month}-${day}T00:00:00.000Z`);
    if (d > new Date()) return null;
    if (!isNaN(d.getTime())) return d;
  } else if (case2) {
    const [_, yyyy, mm, dd] = case2;
    const day = dd.padStart(2, "0");
    const month = mm.padStart(2, "0");
    d = new Date(`${yyyy}-${month}-${day}T00:00:00.000Z`);
    if (d > new Date()) return null;
    if (!isNaN(d.getTime())) return d;
  }

  return null;
};

const parseDay = (from: string) => {
  const days = parseInt(from, 10);
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - days);
  return fromDate;
};

export const getUsersByTimeRange = async (c: Context) => {
  try {
    const from = c.req.query("from");
    const to = c.req.query("to") || new Date().toISOString();
    if (!from) {
      return c.json({ message: "from query parameter is required." }, 400);
    }
    const fromDate = /^\d+$/.test(from) ? parseDay(from) : parseDate(from);
    let toDate = parseDate(to) || new Date();
    if (!fromDate || !toDate) {
      return { message: "Invalid date format for from or to. Use DD-MM-YYYY or YYYY-MM-DD." };
    }
    // Fix: If fromDate === toDate, set toDate to end of that day
    if (fromDate.getTime() === toDate.getTime()) {
      toDate.setHours(23, 59, 59, 999);
    }
    if (fromDate > toDate) {
      return { message: "From date must be before to date." };
    }
    const users = await User.find({
      "timestamp.createdOn": {
        $gte: fromDate,
        $lte: toDate
      }
    });
    return users;
  } catch (err) {
    return { error: "Failed to get users by time range", details: err };
  }
};

export const getUsersSince = async (c: Context, since: string) => {
  try {
    const sinceDate = /^\d+$/.test(since) ? parseDay(since) : parseDate(since);
    if (!sinceDate) {
      return { message: "Invalid date format for since. Use DD-MM-YYYY, ISO, or a number for days." };
    }
    const users = await User.find({ "timestamp.createdOn": { $gte: sinceDate } });
    return users;
  } catch (err) {
    return { error: "Server Error", details: err };
  }
};
export const getPaginatedUsers = async (c: Context) => {
  try {
    const pageNumber = parseInt(c.req.query("pn") || "1", 10) == 0 ? 1 : parseInt(c.req.query("pn") || "1", 10);
    const pageSize = parseInt(c.req.query("ps") || "5", 10) == 0 ? 1 : parseInt(c.req.query("ps") || "5", 10);

    if (isNaN(pageNumber) || isNaN(pageSize)) {
      return c.json({ message: "Page number and size must be valid numbers" }, 400);
    }

    const skip = (pageNumber - 1) * pageSize;

    const [users, total] = await Promise.all([User.find().skip(skip).limit(pageSize), User.countDocuments()]);
    if (skip >= total) {
      return c.json(
        {
          message: "Page number exceeds available data.",
          users: [],
          total,
          pageNumber,
          pageSize
        },
        400
      );
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
    return c.json({ error: "Failed to get paginated users", details: err }, 500);
  }
};

export const queryUsers = async (c: Context) => {
  try {
    const { from, to, since, order } = c.req.query();
    let users: any = {};
    // console.log(from, to, since, pn, ps);
    const pageNumber = parseInt(c.req.query("pn") || "1", 10) == 0 ? 1 : parseInt(c.req.query("pn") || "1", 10);
    const pageSize = parseInt(c.req.query("ps") || "5", 10) == 0 ? 1 : parseInt(c.req.query("ps") || "5", 10);
    // Paginated (pn or ps present)

    if (isNaN(pageNumber) || isNaN(pageSize)) {
      return c.json({ message: "Page number and size must be valid numbers" }, 400);
    }
    const skip = (pageNumber - 1) * pageSize;

    if (from || to) {
      // Time range (from and to present)
      users = await getUsersByTimeRange(c);
      if (users.message) return c.json({ message: users.message }, 400);
      if (users.error) return c.json({ error: users.error, details: users.details }, 500);
    } else if (since) {
      // Since (since present)
      users = await getUsersSince(c, since);
      if (users.message) return c.json({ message: users.message }, 400);
      if (users.error) return c.json({ error: users.error, details: users.details }, 500);
    } else {
      users = await User.find();
    }
    const paginatedUsers = users.slice(skip, skip + pageSize);
    const total = users.length;
    if (order === "desc") {
      paginatedUsers.sort(
        (a: any, b: any) => new Date(b.timestamp.createdOn).getTime() - new Date(a.timestamp.createdOn).getTime()
      );
    } else {
      paginatedUsers.sort(
        (a: any, b: any) => new Date(a.timestamp.createdOn).getTime() - new Date(b.timestamp.createdOn).getTime()
      );
    }
    if (skip >= total) {
      return c.json(
        {
          message: "Page number exceeds available data.",
          users: [],
          total,
          pageNumber,
          pageSize
        },
        400
      );
    }
    return c.json({
      users: paginatedUsers,
      pagination: {
        page: pageNumber,
        pageSize,
        totalUsers: total,
        totalPages: Math.ceil(total / pageSize)
      }
    });
  } catch (err) {
    return c.json({ error: "Query failed", details: err }, 500);
  }
};
