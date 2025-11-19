import mongoose from "mongoose";


const connectDB = async () => {
  try {
    mongoose.connect("mongodb+srv://user:11223344@cluster0.gk0gr9n.mongodb.net/myDataBase")

    console.log("conncted");
    
  } catch (error) {
    console.log("db connect ho gaya",error);
    
  }
}

export default connectDB
