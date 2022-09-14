const express = require('express');
const connectDB = require('./config/database');
const app = express();
const PORT = process.env.PORT

// use .env file in config folder
require("dotenv").config({ path: "./config/.env" })


// connect to the database
connectDB()



// server running
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}, you better get it!`)
})