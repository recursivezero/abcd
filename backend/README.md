# Backend Setup

This is the backend for the project. Follow these steps to get started:

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) instance (local or cloud)

## Installation

1. Open a terminal and navigate to this `backend` directory.
2. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```yaml
MONGO_URI=mongodb://127.0.0.1:27017/<database_name>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
ALLOWED_PROJECTS=your_project_name_header
PORT=3000 # Optional, defaults to 3000
```

- `MONGO_URI`: MongoDB connection string (required)

if mongodb authentication enabled then use

`mongodb://<username>:<password>@127.0.0.1:27017/<db_name>?authSource=admin&retryWrites=true&w=majority&appName=abcd`

otherwise use

`mongodb://127.0.0.1:27017/<database_name>?retryWrites=true&w=majority`

- `JWT_SECRET`: Secret key for JWT signing (required)
- `ALLOWED_PROJECTS`: Value for the `X-projectName` header to allow requests (required)
- `PORT`: Port to run the server (optional, defaults to 3000)

## Running the Server

### Development Mode (with auto-reload)

```bash
npm run dev
```

## API Documentation

Once the server is running, access the Swagger UI at:

- [http://localhost:3000/docs](http://localhost:3000/docs)

---

~ thanks
