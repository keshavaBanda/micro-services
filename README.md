# 🧩 Microservices-Based TODO Application (MEAN Stack)

This project demonstrates how to build a scalable and secure TODO application using **Microservices architecture** with the **MEAN stack** (MongoDB, Express, Angular, Node.js).

---

## 📦 Project Structure

microservices-todo-app/


├── todo-services # Handles todo CRUD operations with authorization <br/>
├── user-services # Handles user registration, login, and JWT auth <br/>
└── frontend/ # Angular app (planned for micro frontend integration)


---

## 🚀 Features

- ✅ **Two Independent Services**: `user-service` and `todo-service`
- 🔐 **JWT-based Authentication** (via login API)
- 🔒 **Route-Level Authorization** using Express middleware
- 👤 Only the **creator** of a TODO can update or delete it
- 🔁 **Service-to-Service Communication** using Axios
- 🌱 **MongoDB Integration** with Mongoose models
- 📅 Created using real-world REST API design principles

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Token)
- **Frontend**: Angular (To be integrated as Micro Frontend)
- **Communication**: Axios for internal service HTTP calls

---

## 🧪 How to Run Locally

### ⚙️ 1. Clone the repository

```bash
git clone https://github.com/keshavaBanda/micro-services.git
cd microservices-todo-app
```


## 🚀 2. Start MongoDB
Make sure MongoDB is running on your system (default port 27017).

🧠 Recommended: Use MongoDB Compass for UI access.

## 🧍‍♂️ 3. Run user-service

cd user-service
npm install
cp .env.example .env     # Or manually create .env
npm start

Sample .env file:
```bash
PORT=3001
JWT_SECRET=your_jwt_secret_key
MONGO_URI=mongodb://localhost:27017/user-service
```

## ✅ 4. Run todo-service

cd ../todo-service
npm install
cp .env.example .env     # Or manually create .env
npm start

Sample .env file:
```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/todo-service
JWT_SECRET=your_jwt_secret_key  # Must match user-service
```

## 🧪 5. Test with Postman
Use Postman or any REST client to:

Register/Login via user-service to get a token

Use the token as Bearer <token> in the Authorization header for all todo-service API calls

## ✨ Upcoming Enhancements
 🔗 Connect to Micro Frontend (Angular)\
 🐳 Dockerize both services\
 🌐 Add API Gateway for unified routing\
 🔄 Refresh Token Mechanism\
 📊 Logging and Monitoring
