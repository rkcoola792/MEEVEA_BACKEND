const mongoose = require("mongoose");

const uri =
  "mongodb+srv://rkcoola792:wTmF8d4ijBQQU2Is@meevea.5njua.mongodb.net/?retryWrites=true&w=majority&appName=MEEVEA";
const connectDB = async (url) => {
  try {
    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;