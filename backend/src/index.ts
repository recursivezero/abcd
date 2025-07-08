import { OpenAPIHono  } from "@hono/zod-openapi";
import { swaggerUI } from '@hono/swagger-ui'
import { serve } from "@hono/node-server";
import {connectDB} from './config/db'
import userRoutes from './routes/userRoutes'
import dotenv from 'dotenv'

dotenv.config();

const app = new OpenAPIHono();

app.route('/', userRoutes);
app.doc('/openapi.json', {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
    },
});
app.get('/docs', swaggerUI({ url: '/openapi.json' }));

const port = Number(process.env.PORT) || 3000;

connectDB().then(() => {
    serve({fetch: app.fetch, port});
    console.log(`Server running at http://localhost:${port}`);
});