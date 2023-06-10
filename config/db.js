import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://BiggaHD:Test_321@cluster0.ywsi1.mongodb.net/MERN_Shop?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
