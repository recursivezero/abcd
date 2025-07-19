import { serve } from "@hono/node-server";
import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import dotenv from "dotenv";
import { cors } from "hono/cors";
import { connectDB } from "./config/db";
import subscriptionRouter from "./routes/subscription";
import userRoutes from "./routes/user";

dotenv.config();

const app = new OpenAPIHono();
app.use(cors());

app.route("/", userRoutes);
app.route("/", subscriptionRouter);

app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    title: "User APIs & Subscription APIs",
    version: "1.1.0"
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  },
  security: [{ bearerAuth: [] }]
} as any);

app.get("/docs", swaggerUI({ url: "/openapi.json" }));

const port = 3000;

console.log("Mongo URI:", process.env.PORT);

connectDB().then(() => {
  serve({ fetch: app.fetch, port });
  console.log(`Server running at http://localhost:${port}`);
});
