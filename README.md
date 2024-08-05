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
   npm install

### Running the Application

1. **Start the development server**:

   node server.js

### **Open in Browser**:

The application will be available at http://localhost:5000.

### **File Structure**:

src/
├── config/
│ ├── db.js
├── middleware/
│ ├── authMiddleware.js
├── models/
│ ├── User.js
│ ├── Property.js
├── routes/
│ ├── authRoutes.js
│ ├── propertyRoutes.js
├── server.js
├── .env
└── ...

### **Technologies Used**:

**Node.js**: Server-side JavaScript runtime
**Express**: Web framework for Node.js
**MongoDB**: NoSQL database
**Mongoose**: ODM for MongoDB
**JWT**: JSON Web Tokens for authentication
**CORS**: Middleware for handling Cross-Origin Resource Sharing
**Contributing**
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

### **API Documentation**

## Authentication

**1.Signup** - POST /api/auth/signup
**Body**: { "name": "string", "email": "string", "password": "string" }
**Response**: { "message": "User created successfully" }

**02.Login** - POST /api/auth/login
**Body**: { "email": "string", "password": "string" }
**Response**: { "token": "jwt_token" }

### **Properties**

## **01.Get All Properties** - GET /api/properties

**Response**: [{...propertyData}]

## **02.Get Property by ID** - GET /api/properties/:id

**Params**: id - Property ID
**Response**: {...propertyData}

## **03.Create Property** - POST /api/properties

**Body**: { "title": "string", "description": "string", "price": "number", "image": "string", "location": "string", "category": "string" }
**Response**: {...propertyData}

## **04.Update Property** - PUT /api/properties/:id

**Params**: id - Property ID
**Body**: {...propertyData}
**Response**: {...updatedPropertyData}

## **05.Delete Property** - DELETE /api/properties/:id

**Params: id** - Property ID
**Response**: 204 No Content

## Back End Links

<br><br>
[GitHub](https://github.com/sshankars1104/AirBnb-Clone-BE.git)
<br><br>
[Render.com](https://airbnb-clone-be-xqje.onrender.com)
<br><br>

## Front End Links

<br><br>
[GitHub](https://github.com/sshankars1104/AirBnb-Clone-FE.git)
<br><br>
[Netlify.com](https://airbnb-clone-fe.netlify.app)

### ** License **

This project is licensed under the MIT License - see the LICENSE file for details.
