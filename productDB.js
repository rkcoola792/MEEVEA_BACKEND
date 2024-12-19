require("dotenv").config();
const connectDB = require("./db/connect");

const Product = require("./models/products");
const productsJson = require("./products");
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.create(productsJson);
        console.log("Success");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();