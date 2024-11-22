# RESTful-API

**RESTful-API** is a backend API for a task management system built with node and express.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later recommended)
- [npm](https://www.npmjs.com/)

## Installation

To get a local copy up and running follow these simple steps:

```bash
# Clone the repository
$ git clone https://github.com/princeorji/RESTful-API.git

# Navigate to the project directory
$ cd RESTful-API

# Install dependencies
$ npm install
```

Create a `.env` file in the root of the project and add your environment variables. You can use the `.env.example` file as a template:

```bash
cp .env.example .env
```

Edit the `.env` file to include your actual credentials.

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run dev
```

## API Endpoints

### Authentication

All **Task** endpoints require JWT authentication. Include the JWT token in the `Authorization` header as a Bearer token:

```http
Authorization: Bearer <token>
```

### Users

- `POST /users/register`: Register a new user.

```json
{
  "username": "string (optional)",
  "email": "string",
  "password": "string"
}
```

- `POST /users/login`: Authenticate an existing user and generate a JWT token

```json
{
  "email": "string",
  "password": "string"
}
```

### Tasks

- `POST /tasks`: Create a new task.

```json
{
  "title": "string",
  "description": "string",
  "dueDate": "date",
  "status": "string",
  "priority": "string",
  "assignedTo": "string",
  "tags": ["string"]
}
```

- `GET /tasks`: Retrieve all tasks

This endpoint supports the following query parameters for filtering and pagination:

#### Query Parameters

- **page** (integer, optional): The page number to retrieve (default is `1`).
- **limit** (integer, optional): The number of tasks per page (default is `10`).
- **status** (string, optional): Filter tasks by status. Accepts `pending`, `in-progress`, or `completed`.
- **priority** (string, optional): Filter tasks by priority. Accepts `low`, `medium`, or `high`.

#### Example Request

```http
GET /tasks?page=1&limit=20&status=pending&priority=high
```

- `GET /tasks/:id`: Retrieve a task by its ID.

- `PUT /tasks/:id`: Update an existing task by ID.

```json
{
  "status": "string"
}
```

- `POST /tasks/share`: Share tasks with others using their email addresses.

```json
{
  "taskId": "string",
  "email": "string"
}
```

- `DELETE /tasks/:id`: Delete a task by ID.

### Response

The API returns standard HTTP status codes:

- `201 Created`: Resource created successfully.
- `200 OK`: Resource retrieved successfully.
- `401 Unauthorized`: Authentication failed or not yet provided.
- `409 Conflict`: Request could not be processed.
- `422 Unprocessable Entity`: Invalid input.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: Server encountered an error.

<!-- ## Run tests

```bash
# unit tests
$ npm run test
``` -->
