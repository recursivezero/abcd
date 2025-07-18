// import { Hono } from 'hono';
// import { zValidator } from '@hono/zod-validator';
// import { addUser, getAllUsers, getUser, toggleStatus, updateUser, userDelete} from '../controllers/userController';
// import { createUserSchema, updateUserSchema} from '../validators/userSchema';

// const userRouter = new Hono();

// userRouter.post('/user/add', zValidator('json', createUserSchema), addUser);
// userRouter.put('/user/update/:_id', zValidator('json', updateUserSchema), updateUser);
// userRouter.get('/user/:_id', getUser);
// userRouter.get('/users', getAllUsers);
// userRouter.patch('/user/status/:_id', toggleStatus);
// userRouter.delete('/user/delete/:_id', userDelete)

// export default userRouter;

import { OpenAPIHono, z } from '@hono/zod-openapi';
import {
  addUser,
  getAllUsers,
  getUser,
  toggleStatus,
  updateUser,
  userDelete,
  builkUsersAdd,
  queryUsers
} from '../controllers/userController';
import {
  createUserSchema,
  updateUserSchema,
} from '../validators/userSchema';
import { authMiddleware } from '../middleware/authMiddleware';
// import { zValidator } from '@hono/zod-validator';

const userRouter = new OpenAPIHono();

// Helper to wrap handlers with authMiddleware
function withAuth(handler: any) {
  return async (c: any, ...args: any[]) => {
    const authResult = await authMiddleware(c, async () => {});
    if (authResult) return authResult;
    return handler(c, ...args);
  };
}

// 🔁 POST /users/add
userRouter.openapi(
    {
    method: 'post',
    path:'/users/add',
    request: {
      body: {
        content: {
          'application/json': {
            schema: createUserSchema,
          },
        },
      },
    },
    responses: {
      200: {
        description: 'User created successfully',
      },
      401: {
        description: 'Unauthorized',
      },
    },
    summary: 'Create a new user',
    tags: ['User'],
    security: [{ bearerAuth: [] }],
  },
  // withAuth(addUser),
  addUser
);

// 🔁 POST /users/builk
userRouter.openapi(
  {
  method: 'post',
  path:'/users/builk',
  request: {
    body: {
      content: {
        'application/json': {
          schema: createUserSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Users created successfully',
    },
    401: {
      description: 'Unauthorized',
    },
  },
  summary: 'Create new users',
  tags: ['User'],
  security: [{ bearerAuth: [] }],
},
// withAuth(builkUsersAdd),
builkUsersAdd
);

// 🔁 PUT /user/update/:_id
userRouter.openapi(
    {
    method: 'put',
    path: '/users/update/{_id}',
    request: {
      params: z.object({
        _id: z.string().openapi({ example: '686ce21742d2ac4499f9af5a' }),
      }),
      body: {
        content: {
          'application/json': {
            schema: updateUserSchema,
          },
        },
      },
    },
    responses: {
      200: {
        description: 'User updated successfully',
      },
      401: {
        description: 'Unauthorized',
      },
    },
    summary: 'Update user details',
    tags: ['User'],
    security: [{ bearerAuth: [] }],
  },
  withAuth(updateUser)
);

// 🔁 GET /user/:_id
userRouter.openapi(
  {
    method: 'get',
    path: '/users/{_id}',
    request: {
      params: z.object({
        _id: z.string().openapi({ example: '686ce21742d2ac4499f9af5a' }),
      }),
    },
    responses: {
      200: {
        description: 'User fetched successfully',
      },
      401: {
        description: 'Unauthorized',
      },
    },
    summary: 'Get a user by ID',
    tags: ['User'],
    security: [{ bearerAuth: [] }],
  },
  withAuth(getUser)
  // getUser
);

// 🔁 GET /users
userRouter.openapi(
  {
    method: 'get',
    path: '/users',
    responses: {
      200: {
        description: 'All users fetched',
      },
      401: {
        description: 'Unauthorized',
      },
    },
    summary: 'Fetch all users',
    tags: ['User'],
    security: [{ bearerAuth: [] }],
  },
  // withAuth(getAllUsers)
  getAllUsers
);

// 🔁 GET /query/users
userRouter.openapi(
  {
    method: 'get',
    path: '/query/users',
    request: {
      query: z.object({
        from: z.string().optional().openapi({ 
          example: '01-09-2024', 
          description: 'Start date (DD-MM-YYYY, YYYY-MM-DD, or days ago as number). If a number, interpreted as days ago. Used with `to` for time range filtering.' 
        }),
        to: z.string().optional().openapi({ 
          example: '10-09-2024', 
          description: 'End date (DD-MM-YYYY, YYYY-MM-DD, or days ago as number). Defaults to today if not provided. Used with `from` for time range filtering.' 
        }),
        since: z.string().optional().openapi({ 
          example: '7', 
          description: 'Since date (DD-MM-YYYY, YYYY-MM-DD, or days ago as number, e.g., since=7 for last 7 days). Mutually exclusive with `from`/`to`.' 
        }),
        pn: z.string().optional().openapi({ 
          example: '1', 
          description: 'Page number (for pagination, default 1). Applies to all query modes.' 
        }),
        ps: z.string().optional().openapi({ 
          example: '5', 
          description: 'Page size (for pagination, default 5). Applies to all query modes.' 
        }),
        order: z.string().optional().openapi({
          example: 'desc',
          description: 'Sort order by creation date. "asc" for ascending, "desc" for descending. Default is ascending.'
        })
      })
    },
    responses: {
      200: {
        description: 'Users fetched by query. Response includes users and pagination info.',
      },
      400: {
        description: 'Invalid or missing parameters. Returned if date formats are wrong, or if from > to, or if page number/size is invalid.',
      },
      401: {
        description: 'Unauthorized',
      },
    },
    summary: 'Unified user query (pagination, time range, since, all)',
    description: `
      Query users with flexible filters:
      - Time range: Use 'from' and 'to' (DD-MM-YYYY, YYYY-MM-DD, or days ago as number)
      - Since: Use 'since' (DD-MM-YYYY, YYYY-MM-DD, or days ago as number)
      - Pagination: Use 'pn' (page number) and 'ps' (page size)
      - Order: Use 'order' ('asc' or 'desc')
      - If no filters are provided, returns all users paginated.
      \nExamples:\n- /query/users?from=01-09-2024&to=10-09-2024\n- /query/users?since=7\n- /query/users?pn=2&ps=10\n- /query/users?order=desc\n`,
    tags: ['User'],
    security: [{ bearerAuth: [] }],
  },
  // withAuth(queryUsers)
  queryUsers
);

// 🔁 PATCH /user/status/:_id
userRouter.openapi(
  {
    method: 'patch',
    path: '/users/status/{_id}',
    request: {
      params: z.object({
        _id: z.string().openapi({ example: '686ce21742d2ac4499f9af5a' }),
      }),
    },
    responses: {
      200: {
        description: 'User status toggled',
      },
      401: {
        description: 'Unauthorized',
      },
    },
    summary: 'Toggle user active/inactive status',
    tags: ['User'],
    security: [{ bearerAuth: [] }],
  },
  withAuth(toggleStatus)
);

// 🔁 DELETE /user/delete/:_id
userRouter.openapi(
  {
    method: 'delete',
    path: '/users/delete/{_id}',
    request: {
      params: z.object({
        _id: z.string().openapi({ example: '686ce21742d2ac4499f9af5a' }),
      }),
    },
    responses: {
      200: {
        description: 'User deleted successfully',
      },
      401: {
        description: 'Unauthorized',
      },
    },
    summary: 'Delete user by ID',
    tags: ['User'],
    security: [{ bearerAuth: [] }],
  },
  // withAuth(userDelete)
  userDelete
);

export default userRouter;
