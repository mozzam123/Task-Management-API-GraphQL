import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const connectDB = async () => {
    try {
        const DATABASE = process.env.DATABASE
        await mongoose.connect(DATABASE)
        console.log('Database Connected');

    } catch (error) {
        console.log('Error: ', error);

    }
}


export default connectDB;

