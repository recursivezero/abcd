import { OpenAPIHono  } from "@hono/zod-openapi";
import { swaggerUI } from '@hono/swagger-ui'
import { serve } from "@hono/node-server";
import {connectDB} from './config/db'
import userRoutes from './routes/userRoutes'
import subscriptionRouter from './routes/subscriptionRoutes';
import dotenv from 'dotenv'
import {cors } from "hono/cors";

dotenv.config();


const app = new OpenAPIHono();
app.use(cors());

app.route('/', userRoutes);
app.route('/', subscriptionRouter);
app.doc('/openapi.json', {
  openapi: '3.0.0',
  info: {
    title: 'User APIs & Subscription APIs',
    version: '1.1.0',
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{ bearerAuth: [] }],
} as any);

app.get('/docs', swaggerUI({ url: '/openapi.json' }));

const port = Number(process.env.PORT) || 3000;

connectDB().then(() => {
    serve({fetch: app.fetch, port});
    console.log(`Server running at http://localhost:${port}`);
});