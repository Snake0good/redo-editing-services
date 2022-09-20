const express = require('express');
const connectDB = require('./config/database');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const flash = require("express-flash");
const passport = require("passport");

const session = require("express-session");
const MongoStore = require("connect-mongo");
// const MongoStore = require("connect-mongo")(session);
const mainRoutes = require('./routes/main');

// use .env file in config folder
require("dotenv").config({ path: "./config/.env" })

// Passport config
require("./config/passport")(passport);

// connect to the database
connectDB()

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Setup Sessions - stored in MongoDB
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ client: mongoose.connection.getClient() }),
    })
);


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// flash messages and errors
app.use(flash())

// setup routs for the server to listen
app.use(express.static(path.join(__dirname, '../client/build')))
app.use("/", mainRoutes)



// server running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}, you better get it!`)
})