const path = require("path");
const express = require('express');


module.exports = {
    getIndex: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../', '../', 'client', 'build', 'index.html'))
    }
}

