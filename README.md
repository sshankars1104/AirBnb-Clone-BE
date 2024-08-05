# Airbnb Clone - Backend

## Project Description

This backend service for the Airbnb Clone project provides APIs for user authentication, property management, and other necessary functionalities. It is built using Node.js, Express, and MongoDB. The backend handles user data securely, manages property listings, and ensures a seamless interaction between the frontend and database.

## Features

- User Authentication (Signup, Login, Logout)
- CRUD operations for property listings
- Protected routes using JWT for secure access
- CORS support for frontend-backend communication

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/airbnb-clone-backend.git

   ```

2. **Install dependencies**:

   ```bash
   npm install

   ```

### Running the Application

1. **Start the development server**:

   ```bash
   node server.js

   ```

### **Open in Browser**:

The application will be available at http://localhost:5000.

### **File Structure**:

src/<br>
├── config/<br>
│ ├── db.js<br>
├── middleware/<br>
│ ├── authMiddleware.js<br>
├── models/<br>
│ ├── User.js<br>
│ ├── Property.js<br>
├── routes/<br>
│ ├── authRoutes.js<br>
│ ├── propertyRoutes.js<br>
├── server.js<br>
├── .env<br>
└── ...<br>

### **Technologies Used**:

**Node.js**: Server-side JavaScript runtime<br>
**Express**: Web framework for Node.js<br>
**MongoDB**: NoSQL database<br>
**Mongoose**: ODM for MongoDB<br>
**JWT**: JSON Web Tokens for authentication<br>
**CORS**: Middleware for handling Cross-Origin Resource Sharing<br>
**Contributing**<br>
Contributions are welcome! Please fork the repository and submit a pull request with your changes.<br>

### **API Documentation**

## Authentication

**1.Signup** - POST /api/auth/signup<br>
**Body**: { "name": "string", "email": "string", "password": "string" }<br>
**Response**: { "message": "User created successfully" }<br>

**02.Login** - POST /api/auth/login<br>
**Body**: { "email": "string", "password": "string" }<br>
**Response**: { "token": "jwt_token" }<br>

### **Properties**

## **01.Get All Properties** - GET /api/properties

**Response**: [{...propertyData}]<br>

## **02.Get Property by ID** - GET /api/properties/:id

**Params**: id - Property ID<br>
**Response**: {...propertyData}<br>

## **03.Create Property** - POST /api/properties

**Body**: { "title": "string", "description": "string", "price": "number", "image": "string", "location": "string", "category": "string" }<br>
**Response**: {...propertyData}<br>

## **04.Update Property** - PUT /api/properties/:id

**Params**: id - Property ID<br>
**Body**: {...propertyData}<br>
**Response**: {...updatedPropertyData}<br>

## **05.Delete Property** - DELETE /api/properties/:id

**Params: id** - Property ID<br>
**Response**: 204 No Content<br>

## Back End Links

<br><br>
[GitHub](https://github.com/sshankars1104/AirBnb-Clone-BE.git)
<br><br>
[Render.com](https://airbnb-clone-be-l1y1.onrender.com)
<br><br>

## Front End Links

<br><br>
[GitHub](https://github.com/sshankars1104/AirBnb-Clone-FE.git)
<br><br>
[Netlify.com](https://airbnb-clone-fe.netlify.app)

### ** License **

This project is licensed under the MIT License - see the LICENSE file for details.
