import mongoose from 'mongoose';
// import { TOKEN_SECRET } from './config.js'
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
    try {
        // await mongoose.connect(`mongodb+srv://jonnathanmonroybd:${TOKEN_SECRET}@cluster0.j8kwwty.mongodb.net/?retryWrites=true&w=majority`);
        const url = process.env.MONGODB_CONNECT_URI;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("MongoDB is connected");
        // router.get("/", (req, res) => {
        //     res.send("Esta activo el backend")
        // })
    } catch (error) {
        console.error(error);
    }
};


