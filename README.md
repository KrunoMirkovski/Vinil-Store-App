# Vinyl Store - MERN Stack Project

Welcome to the Vinyl Store project! This is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The project aims to create an online vinyl store where users can browse, add products to their cart, and make orders. Additionally, an admin dashboard is provided for inventory management, allowing admins to manage vinyl products efficiently.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Redux, RTK Query Toolkit
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) for secure admin access
- **Data Modeling**: Mongoose for MongoDB schema management

## Features

### User Features:
- Browse a wide selection of vinyl records.
- Add vinyl records to the cart.
- Proceed to checkout and place orders.
- Cash-on-delivery payment system.

### Admin Features:
- Secure admin dashboard for managing vinyl products.
- Add new vinyl records to the store.
- Update and manage existing vinyl records.
- Delete vinyl records.
- Admin access is secured with username and password authentication.

## Getting Started

### Prerequisites

Before you begin, ensure that you have the following installed on your machine:
- **Node.js**
- **MongoDB**
- **Git**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vinyl-store.git
   cd vinyl-store

2. Install dependencies:

For the backend:
    cd backend
    npm install

For the frontend:
    cd frontend
    npm install

3. Configure environment variables:
Create a .env file in both the backend and frontend directories. Include necessary configurations such as MongoDB connection string and JWT secret key.

4. Run the application:

For the backend:
    cd backend
    npm run start:dev

For the frontend:
    cd frontend
    npm run dev

Usage

Users can browse the vinyl store, add items to their cart, and place orders.
Admins can log in to the admin dashboard using their username and password, which allows them to manage vinyl records.

Contributing

Feel free to fork this repository and contribute. Open an issue if you find any bugs or have suggestions for improvement.
