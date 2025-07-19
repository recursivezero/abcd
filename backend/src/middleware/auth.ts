import { MiddlewareHandler } from "hono";
import jwt from "jsonwebtoken";

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const authHeader = c.req.header("authorization");
  const projectName = c.req.header("X-projectName");

  if (!projectName) return c.json({ message: "Missing project header" }, 400); // Prevent Bot/Scraper Requests

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ message: "Unauthorized: No token provided" }, 401);
  }

  if (projectName !== process.env.ALLOWED_PROJECTS!) return c.json({ message: "Forbidden: Invalid project" }, 403);

  const token = authHeader.split(" ")[1];
  try {
    const secret = process.env.JWT_SECRET!;
    const decoded = jwt.verify(token, secret);
    c.set("user", decoded); // Optionally attach user info to context
    await next();
  } catch (err) {
    return c.json({ message: "Unauthorized: Invalid token" }, 401);
  }
};

const payload = {
  _id: process.env.JWT_SECRET,
  email: "xkeshav@gmail.com"
};

const secret = "abcd";

const token = jwt.sign(payload, secret, { expiresIn: "1h" });
