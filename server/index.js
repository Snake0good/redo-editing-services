const express = require('express');
const connectDB = require('./config/database');
const app = express();
const path = require('path')
const mainRoutes = require('./routes/main');

// use .env file in config folder
require("dotenv").config({ path: "./config/.env" })


// connect to the database
connectDB()


// setup routs for the server to listen
app.use(express.static(path.join(__dirname, '../client/build')))
app.use("/", mainRoutes)



// server running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}, you better get it!`)
})