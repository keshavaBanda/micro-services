const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


// MiddlewareJWT_SECRET 
app.use(cors());
app.use(express.json());

//Connected DB
connectDB();

// Routes
app.use('/api/todos', require('./routes/todos')) // custom-middle

//Start Server 
app.listen(PORT, ()=>{
    console.log("Server Started!")
})
