import CitaGeneral from "../models/citaGeneral.model.js";

export const getCitasGeneral = async (req, res) => {
    try {
        const citasGeneral = await CitaGeneral.find({ user: null }); // aqui es donde usamos el id del usuario AUTENTICADO para traer solo sus tareas, El .populate trae la info del usuario tambien
        res.json(citasGeneral);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCitasGeneralUsuario = async (req, res) => {
    try {
        const citasGeneralUsuario = await CitaGeneral.find({ user: req.user.id }).populate("user"); // aqui es donde usamos el id del usuario AUTENTICADO para traer solo sus tareas, El .populate trae la info del usuario tambien
        res.json(citasGeneralUsuario);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCitasGeneralTutor = async (req, res) => {
    try {
        const citasGeneralTutor = await CitaGeneral.find({ code: req.params.code }).populate("user"); // aqui es donde usamos el id del usuario AUTENTICADO para traer solo sus tareas, El .populate trae la info del usuario tambien
        res.json(citasGeneralTutor);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createCitaGeneral = async (req, res) => {
    try {
        const { tema, tutor, code, descripcion, hora, fecha } = req.body;
        const newCitaGeneral = new CitaGeneral({
            tema,
            tutor,
            code: req.user.id, // aqui estamos guardando el id del usuario para poder relacionarlo con sus estudiantes.
            descripcion,
            hora,
            fecha,
            user: null,  // Ponemos el usuario en null para que lo pueda tomar luego cualquier usuario al editarlo
        });
        await newCitaGeneral.save();
        res.json(newCitaGeneral);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteCitaGeneral = async (req, res) => {
    try {
        const deletedCitaGeneral = await CitaGeneral.findByIdAndDelete(req.params.id);
        if (!deletedCitaGeneral)
            return res.status(404).json({ message: "CitaGeneral no encontrada" });
        // res.json(deletedCitaGeneral);  Esto mostraria la tarea que fue borrada.
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateCitaGeneral = async (req, res) => {
    try {
        const { tema, code, descripcion, hora, fecha, user } = req.body;
        const citaGeneralUpdated = await CitaGeneral.findOneAndUpdate(
            { _id: req.params.id },
            { tema, code, descripcion, hora, fecha, user: req.user.id },
            { new: true }
        );
        return res.json(citaGeneralUpdated);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCitaGeneral = async (req, res) => {
    try {
        const citaGeneral = await CitaGeneral.findById(req.params.id); // .populate('user'); para traer en cada tarea los datos del usuario.
        if (!citaGeneral) return res.status(404).json({ message: "Tarea no encontrada" });
        return res.json(citaGeneral);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};