import app from './src/app.js' // en app.js estamos ejecutando express que es el servidor
import { connectDB } from "./src/db.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 4000;
connectDB(); // se ejecuta la conexion a la base de datos.

app.listen(port, () => {
    console.log(`puerto corriendo en: ${port}`);
})


// app.listen(4000);
// console.log('Server on port ', 4000);

