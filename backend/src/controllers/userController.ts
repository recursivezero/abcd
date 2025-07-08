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