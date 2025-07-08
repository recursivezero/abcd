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
import { addUser, getAllUsers, getUser, toggleStatus, updateUser, userDelete } from '../controllers/userController';

import { createUserSchema, updateUserSchema } from '../validators/userSchema';

const userRouter = new OpenAPIHono();

userRouter.openapi(
    {
        method: 'post',
        path: '/user/add', 
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
        },
        summary: 'Create a new user',
        tags: ['User'],
    },
    addUser
);

userRouter.openapi(
    {
        method: 'put',
        path: '/user/update/{_id}',
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
        },
        summary: 'Update user details by ID',
        tags: ['User'],
    },
    updateUser
);


userRouter.openapi(
    {
        method: 'get',
        path: '/user/{_id}',
        request: {
            params: z.object({
                _id: z.string().openapi({ example: '686ce21742d2ac4499f9af5a' }),
            }),
        },
        responses: {
            200: {
                description: 'User fetched successfully',
            },
        },
        summary: 'Get a user by ID',
        tags: ['User'],
    },
    getUser
);

userRouter.openapi(
    {
        method: 'get',
        path: '/users',
        responses: {
            200: {
                description: 'All users fetched',
            },
        },
        summary: 'Fetch all users',
        tags: ['User'],
    },
    getAllUsers
);

userRouter.openapi(
    {
        method: 'patch',
        path: '/user/status/{_id}',
        request: {
            params: z.object({
                _id: z.string().openapi({ example: '686ce21742d2ac4499f9af5a' }),
            }),
        },
        responses: {
            200: {
                description: 'User status toggled',
            },
        },
        summary: 'Toggle user active/inactive status',
        tags: ['User'],
    },
    toggleStatus
);

userRouter.openapi(
    {
        method: 'delete',
        path: '/user/delete/{_id}',
        request: {
            params: z.object({
                _id: z.string().openapi({ example: '686ce21742d2ac4499f9af5a' }),
            }),
        },
        responses: {
            200: {
                description: 'User deleted successfully',
            },
        },
        summary: 'Delete user by ID',
        tags: ['User'],
    },
    userDelete
);

export default userRouter;
