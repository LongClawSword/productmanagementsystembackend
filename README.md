### Backend README


# Product Management System - Backend

This is the backend API for the Product Management System built using Node.js and Express.

## Features

- RESTful API for product management.
- Supports CRUD operations: Create, Read, Update, Delete.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL for the database
- CORS for handling cross-origin requests

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- PostgreSQL database

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd backend
2. **Install Dependencies**:

   ```bash
   npm install
3. **Set Up PostgreSQL Database**:
   - Create a PostgreSQL database named productdb
   - Create a products table with the following SQL:
   ```sql
   CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price FLOAT NOT NULL,
    quantity INTEGER NOT NULL
    );
4. **Set Up Environment Variables**:
   Create a .env file in the root of the backend directory and add your database connection string: 
   ```env
   DATABASE_URL=postgres://username:password@localhost:5432/productdb
5. **Run the Server**:
   Start the backend server:
   ```bash
   node server.js
7. **API Endpoints**:
   - GET /api/products - Fetch all products
   - POST /api/products - Add a new product
   - PUT /api/products/:id - Edit an existing product
   - DELETE /api/products/:id - Delete a product
