import app from './app.js' // en app.js estamos ejecutando express que es el servidor
import { connectDB } from "./db.js";

const port = process.env.PORT || 4000;
connectDB(); // se ejecuta la conexion a la base de datos.

app.listen(port, () => {
    console.log(`puerto corriendo en: ${port}`);
})

// app.listen(4000);
// console.log('Server on port ', 4000);

