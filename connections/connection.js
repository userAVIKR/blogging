import mongoose from "mongoose";

const connectDB = async (username,password) => {
  
 
    try {
    await mongoose.connect(`mongodb+srv://jhaavinash110044:Avinash@6969@cluster0.pwylg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
     
    });
    console.log("MongoDB Connected to mydatabase");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1); // Exit if connection fails
  }
};

export default connectDB; 