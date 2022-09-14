const express = require('express');
const app = express();

// server running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better get it!")
})