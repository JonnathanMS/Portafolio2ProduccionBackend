import mongoose from 'mongoose';
import { TOKEN_SECRET } from './config.js'

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://jonnathanmonroybd:${TOKEN_SECRET}@cluster0.j8kwwty.mongodb.net/?retryWrites=true&w=majority`);
        console.log("MongoDB is connected");
    } catch (error) {
        console.error(error);
    }
};