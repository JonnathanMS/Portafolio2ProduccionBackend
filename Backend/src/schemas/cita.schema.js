import { z } from "zod";

export const createCitaSchema = z.object({
    tema: z.string({
        required_error: "Title is required",
    }),
    descripcion: z.string({
        required_error: "La descripcion es requerida",
    }), // al poner .optional() es que no es obligatorio poner el dato
    fecha: z.string() // .datetime(), // datetime valida que si sea una fecha.
});