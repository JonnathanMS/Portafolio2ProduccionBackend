import app from './src/app.js' // en app.js estamos ejecutando express que es el servidor
import { connectDB } from "./src/db.js";

const port = process.env.PORT || 4000;
connectDB(); // se ejecuta la conexion a la base de datos.

app.listen(port, () => {
    console.log(`puerto corriendo en: ${port}`);
})

app.get("/", (req, res) => {
    res.send("Esta activo el backend")
})
// app.listen(4000);
// console.log('Server on port ', 4000);

