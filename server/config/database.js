const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('MongoDB Connected: ')
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB