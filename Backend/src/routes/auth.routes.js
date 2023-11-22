import { Router } from "express";
import {
    login,
    logout,
    register,
    profile,
    verifyToken,
    updatePassword,
} from "../controllers/auth.controller.js";
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema, updateSchema } from "../schemas/auth.schema.js";

const router = Router();

// router.post("/api/register", register); // esta es una de las formas de modificar las rutas
router.post("/register", validateSchema(registerSchema), register); // antes de pasar a la ruta se ejecuta el middleware validateSchema que compara el schema de zod con el req.body del frontend.
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken); //*PARA CADA RUTA QUE SE QUIERA PROTEGER SOLO PONER EL authRequired
router.get("/profile", authRequired, profile); //*PARA CADA RUTA QUE SE QUIERA PROTEGER SOLO PONER EL authRequired
router.put('/cambiarContrasena', authRequired, validateSchema(updateSchema), updatePassword); // Actualizar un elemento por el id.
// router.get("/", (req, res) => {
//     res.send("Esta activo el backend")
// })

export default router;