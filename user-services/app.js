const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/', require('./routes/users'))
const PORT = process.env.PORT || 3001;;

app.listen(PORT, () => {
    console.log(`User Service Running on Port ${PORT}`);
})