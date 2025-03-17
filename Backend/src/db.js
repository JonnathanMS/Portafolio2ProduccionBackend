import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
    try {
        const url = process.env.MONGODB_CONNECT_URI;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("MongoDB is connected");
    } catch (error) {
        console.error(error);
    }
};


