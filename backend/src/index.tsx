import { serve } from "@hono/node-server";
import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import dotenv from "dotenv";
import { Context } from "hono";
import { cors } from "hono/cors";
import { Style, css } from 'hono/css';

import { connectDB } from "./config/db";
import subscriptionRouter from "./routes/subscription";
import userRoutes from "./routes/user";

dotenv.config();

const app = new OpenAPIHono();
app.use(cors());

app.route("/", userRoutes);
app.route("/", subscriptionRouter);

const View = () => {
  const headerClass = css`
    background-color: green;
    color: white;
    padding: 1rem;
    text-align: center;
  `;
  const divClass = css`
    display:grid;
    place-content: center;
    & a {
      color:red;
      font-size: 2rem;
    }
    `;
  return (
    <html>
      <head><Style /></head>
      <body>
        <h1 class={ headerClass }>Hello Hono!</h1>
        <div class={ divClass }>
          <a href="/docs">Docs</a>
        </div>
      </body>
    </html>
  )
};


app.get("/", (c: Context) => {
  return c.html(<View />)
});

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
