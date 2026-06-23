import { personajeSchema } from "../schemas/personajes.js";

export function personajeValidate(req, res, next) {
    console.log("Validando...", req.body)
    const personaje = {
        "superhero": req.body.superheroe,
        "publisher": req.body.editorial,
        "alter_ego": req.body.alterEgo,
        "first_appearance": req.body.firstAppearance,
        "characters": req.body.characters,
        "cafes": [],
        "portada": req.file.filename
    }
    personajeSchema.validate(personaje, { abortEarly: false, stripUnknown: true })
        .then(() => next())
        .catch(err => res.status(400).json({ message: err.errors }))
}