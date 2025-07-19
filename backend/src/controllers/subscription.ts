import { Context } from "hono";
import mongoose from "mongoose";
import { Subscribers } from "../models/subscription";
import { User } from "../models/user";

export const follow = async (c: Context) => {
  try {
    const { followerId, followingId } = await c.req.json();

    if (!followerId || !followingId) {
      return c.json({ message: "Id not found" }, 400);
    }

    if (followerId === followingId) {
      return c.json({ message: "You cannot follow yourself" }, 400);
    }

    const followerUser = await User.exists({ _id: followerId });
    const followingUser = await User.exists({ _id: followingId });

    if (!followerUser || !followingUser) {
      return c.json({ message: "User not found" }, 404);
    }

    // Prevent duplicate follows
    const alreadyFollowing = await Subscribers.findOne({
      followerId: followerId,
      followingId: followingId
    });

    if (alreadyFollowing) {
      return c.json({ message: "Already following this user" }, 400);
    }

    // Create new subscription
    const newSubscriber = new Subscribers({
      followerId: followerId,
      followingId: followingId
    });

    await newSubscriber.save();

    return c.json({ message: "Followed successfully" }, 201);
  } catch (err) {
    return c.json({ message: "Server error", error: err }, 500);
  }
};

export const unfollow = async (c: Context) => {
  try {
    const { followerId, followingId } = await c.req.json();

    if (!followerId || !followingId) {
      return c.json({ message: "Id not found" }, 400);
    }

    const followerUser = await User.exists({ _id: followerId });
    const followingUser = await User.exists({ _id: followingId });

    if (!followerUser || !followingUser) {
      return c.json({ message: "User not found" }, 404);
    }

    // Find and delete the subscription
    const deleted = await Subscribers.findOneAndDelete({
      followerId: followerId,
      followingId: followingId
    });

    if (!deleted) {
      return c.json({ message: "You are not following this user" }, 400);
    }

    return c.json({ message: "Unfollowed successfully" }, 200);
  } catch (err) {
    return c.json({ message: "Server error", error: err }, 500);
  }
};

export const getFollowers = async (c: Context) => {
  try {
    const { userId } = c.req.param(); // If using route param, e.g., /followers/:userId
    if (!userId) {
      return c.json({ message: "User ID not provided" }, 400);
    }
    const isExist = await User.exists({ _id: userId });
    if (!isExist) return c.json({ message: "User Not found" }, 404);

    const findFollowers = await Subscribers.find({ followingId: userId });
    if (!findFollowers) {
      return c.json({ message: "User not found" }, 404);
    }
    await Subscribers.populate(findFollowers, { path: "followerId", select: "username" });

    const followers = findFollowers.map((sub) => sub.followerId);

    return c.json({ followers: followers }, 200);
  } catch (err) {
    return c.json({ message: "Server error", error: err }, 500);
  }
};

export const followCount = async (c: Context) => {
  try {
    const { userId } = await c.req.param();
    if (!userId) return c.json({ message: "User ID not provided" }, 400);
    const isExist = await User.exists({ _id: userId });
    if (!isExist) return c.json({ message: "User Not found" }, 404);
    const count = await Subscribers.countDocuments({ followingId: userId });
    return c.json({ total: count, message: "follower count" }, 200);
  } catch (err) {
    return c.json({ message: "Server Error", error: err }, 500);
  }
};

export const followingCount = async (c: Context) => {
  try {
    const { userId } = await c.req.param();
    if (!userId) return c.json({ message: "User ID not provided" }, 400);
    const isExist = await User.exists({ _id: userId });
    if (!isExist) return c.json({ message: "User Not found" }, 404);
    const count = await Subscribers.countDocuments({ followerId: userId });
    return c.json({ total: count, message: "following count" }, 200);
  } catch (err) {
    return c.json({ message: "Server Error", error: err }, 500);
  }
};

const formatDate = (date: Date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

export const followerList = async (c: Context) => {
  try {
    const { userId } = await c.req.param();
    if (!userId) return c.json({ message: "User ID not provided" }, 400);
    const isExist = await User.exists({ _id: userId });
    if (!isExist) return c.json({ message: "User Not found" }, 404);

    const findFollowers = await Subscribers.find({ followingId: userId })
      .populate("followerId", "username")
      .select("followerId createdAt");
    const followers = findFollowers.map((entry) => {
      const follower = entry.followerId as unknown as { _id: mongoose.Types.ObjectId; username: string };
      return {
        id: follower._id.toString(),
        username: follower.username,
        followingAt: formatDate(entry.createdAt)
      };
    });
    return c.json({ followers });
  } catch (err) {
    return c.json({ message: "Server Error", error: err }, 500);
  }
};

export const followingList = async (c: Context) => {
  try {
    const { userId } = await c.req.param();
    if (!userId) return c.json({ message: "User ID not provided" }, 400);
    const isExist = await User.exists({ _id: userId });
    if (!isExist) return c.json({ message: "User Not found" }, 404);

    const findFollowing = await Subscribers.find({ followerId: userId })
      .populate("followingId", "username")
      .select("followingId createdAt");
    const followings = findFollowing.map((entry) => {
      const user = entry.followingId as unknown as { _id: mongoose.Types.ObjectId; username: string };
      return {
        id: user._id.toString(),
        username: user.username,
        followedAt: formatDate(entry.createdAt)
      };
    });
    return c.json({ followings });
  } catch (err) {
    return c.json({ message: "Server Error", error: err }, 500);
  }
};

export const followCountAnFollowingCount = async (c: Context) => {
  try {
    const { userId } = c.req.param();
    if (!userId) return c.json({ message: "User ID not provided" }, 400);
    const isExist = await User.exists({ _id: userId });
    if (!isExist) return c.json({ message: "User Not found" }, 404);
    const followers = await Subscribers.countDocuments({ followingId: userId });
    const followings = await Subscribers.countDocuments({ followerId: userId });
    return c.json(
      { message: "Fetched followers and followings count successfully", total: { followers, followings } },
      200
    );
  } catch (err) {
    return c.json({ message: "Server Error", error: err }, 500);
  }
};
