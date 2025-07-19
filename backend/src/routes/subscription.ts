import { OpenAPIHono, z } from "@hono/zod-openapi";
import {
  follow,
  followCount,
  followCountAnFollowingCount,
  followerList,
  followingCount,
  followingList,
  getFollowers,
  unfollow
} from "../controllers/subscription";
import { subscriptionSchema } from "../schemas/subscription";

const subscriptionRouter = new OpenAPIHono();

// POST /follow
subscriptionRouter.openapi(
  {
    method: "post",
    path: "/follow",
    request: {
      body: {
        content: {
          "application/json": {
            schema: subscriptionSchema
          }
        }
      }
    },
    responses: {
      201: { description: "Followed successfully" },
      400: { description: "Invalid input or already following" },
      404: { description: "User not found" },
      500: { description: "Server error" }
    },
    summary: "Follow a user",
    tags: ["Subscription"]
  },
  follow
);

// PUT /unfollow
subscriptionRouter.openapi(
  {
    method: "put",
    path: "/unfollow",
    request: {
      body: {
        content: {
          "application/json": {
            schema: subscriptionSchema
          }
        }
      }
    },
    responses: {
      200: { description: "Unfollowed successfully" },
      400: { description: "Id not found or not following" },
      500: { description: "Server error" }
    },
    summary: "Unfollow a user",
    tags: ["Subscription"]
  },
  unfollow
);

// GET /followers/:userId
subscriptionRouter.openapi(
  {
    method: "get",
    path: "/followers/{userId}",
    request: {
      params: z.object({
        userId: z.string().openapi({ example: "686ce21742d2ac4499f9af5a" })
      })
    },
    responses: {
      200: { description: "Followers fetched" },
      400: { description: "User ID not provided" },
      404: { description: "User not found" },
      500: { description: "Server error" }
    },
    summary: "Get followers of a user",
    tags: ["Subscription"]
  },
  getFollowers
);

// GET /follower/count/:userId
subscriptionRouter.openapi(
  {
    method: "get",
    path: "/follower/count/{userId}",
    request: {
      params: z.object({
        userId: z.string().openapi({ example: "686ce21742d2ac4499f9af5a" })
      })
    },
    responses: {
      200: { description: "Follower count fetched" },
      400: { description: "User ID not provided or not found" },
      500: { description: "Server error" }
    },
    summary: "Get follower count of a user",
    tags: ["Subscription"]
  },
  followCount
);

// GET /following/count/:userId
subscriptionRouter.openapi(
  {
    method: "get",
    path: "/following/count/{userId}",
    request: {
      params: z.object({
        userId: z.string().openapi({ example: "686ce21742d2ac4499f9af5a" })
      })
    },
    responses: {
      200: { description: "Following count fetched" },
      400: { description: "User ID not provided or not found" },
      500: { description: "Server error" }
    },
    summary: "Get following count of a user",
    tags: ["Subscription"]
  },
  followingCount
);

// GET /follower/list/:userId
subscriptionRouter.openapi(
  {
    method: "get",
    path: "/follower/list/{userId}",
    request: {
      params: z.object({
        userId: z.string().openapi({ example: "686ce21742d2ac4499f9af5a" })
      })
    },
    responses: {
      200: { description: "Follower list fetched" },
      400: { description: "User ID not provided or not found" },
      500: { description: "Server error" }
    },
    summary: "Get follower list of a user",
    tags: ["Subscription"]
  },
  followerList
);

// GET /following/list/:userId
subscriptionRouter.openapi(
  {
    method: "get",
    path: "/following/list/{userId}",
    request: {
      params: z.object({
        userId: z.string().openapi({ example: "686ce21742d2ac4499f9af5a" })
      })
    },
    responses: {
      200: { description: "Following list fetched" },
      400: { description: "User ID not provided or not found" },
      500: { description: "Server error" }
    },
    summary: "Get following list of a user",
    tags: ["Subscription"]
  },
  followingList
);

// GET /follow/count/:userId
subscriptionRouter.openapi(
  {
    method: "get",
    path: "/follow/count/{userId}",
    request: {
      params: z.object({
        userId: z.string().openapi({ example: "686ce21742d2ac4499f9af5a" })
      })
    },
    responses: {
      200: { description: "Followers and followings count fetched" },
      400: { description: "User ID not provided or not found" },
      500: { description: "Server error" }
    },
    summary: "Get both follower and following count of a user",
    tags: ["Subscription"]
  },
  followCountAnFollowingCount
);

export default subscriptionRouter;
