const express = require('express');
const app = express();

// use .env file in config folder
require("dotenv").config({ path: "./config/.env" })

const PORT = process.env.PORT

// server running
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}, you better get it!`)
})