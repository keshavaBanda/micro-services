const mongoose = require('mongoose');

const ConnectDB = async () =>{
    try{
        require('dotenv').config();
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    }catch(error){
        console.log("DB connection Error mean-todo", err);
        process.exit();
    }
}

module.exports = ConnectDB;