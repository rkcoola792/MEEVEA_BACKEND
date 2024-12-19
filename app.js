require('dotenv').config(); 
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./db/connect');
app.get('/', (req, res) => {    
    res.send('Hello World!');
});

// middelware to set routes
app.use("/api/products", require("./routes/products"));

try {
    app.listen(port, async() => {
        await connectDB(process.env.MONGODB_URL);
        console.log(`MEVEEA app listening at http://localhost:${port}`);
    });
} catch (error) {
    console.error('Error occurred while trying to listen:', error);
}
