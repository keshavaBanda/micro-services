const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB connected Successfully..")
    } catch (error) {
        console.error("Mongo DB Connection Error", error);
        process.exit();
    }
}

module.exports = connectDB;

