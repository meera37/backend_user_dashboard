# User Management Dashboard - Backend

This repository contains the backend for the User Management Dashboard application. It is built with Node.js, Express, and PostgreSQL.

## Prerequisites

Before running the application, ensure you have:

- Node.js (v14 or higher) installed
- npm (comes with Node.js)
- PostgreSQL installed and running

## Getting Started

1. Clone the repository
   - git clone https://github.com/meera37/backend_user_dashboard.git
   - cd backend

2. Install dependencies

   - npm install

3. Create a PostgreSQL database
   - CREATE DATABASE backend_user_management_dashboard;

4. Create a .env file in the root directory with the following content:
 - DB_CLIENT=pg
 - DB_HOST=localhost
 - DB_PORT=5432
 - DB_USER=your_db_user
 - DB_PASSWORD=your_PostgreSQL_password
 - DB_NAME=your_db_name
 - PORT=3030

5. Start your app

 - npm start

