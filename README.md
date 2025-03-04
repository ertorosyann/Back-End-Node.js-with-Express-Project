# Back-End Node.js with Express Project

This project is a back-end API built using **Node.js** and **Express.js**. It implements authentication (login, registration), token-based protected routes, and CRUD functionality for managing a resource (e.g., items). The application uses **MongoDB** for data storage.

## Key Features:
- **Authentication API**: Register and login endpoints with JWT-based authentication.
- **CRUD Operations**: Endpoints to create, read, update, and delete items.
- **Protected Routes**: Some routes are protected and require a valid token.
- **Error Handling**: Proper HTTP status codes and error handling.

## Technology Stack:
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database for storing data.
- **JWT**: For authentication and securing routes.
- **Mongoose**: MongoDB ODM for interacting with the database.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>


## API Endpoints

## Authentication:
   - **POST**: /auth/register: Registers a new user.
   - **POST**: /auth/login: Logs in a user and returns a JWT token.
## RUD Operations for Item:
   - **POST**: /api/items: Creates a new item.
   - **GET**: /api/items: Retrieves all items.
   - **GET**: /api/items/:id: Retrieves a specific item by its ID.
   - **PUT**: /api/items/:id: Updates an item by its ID.
   - **DELETE**: /api/items/:id: Deletes an item by its ID.

