import express from 'express'
import * as controllers from "../controllers/personajes.controllers.js"

const router = express.Router()
router.get("/api/personajes", controllers.getPersonajes)
router.post("/api/personajes/:id", controllers.asignarFavorito)
router.get("/api/personajes/:id", controllers.getPersonajeById)
router.post("/api/personajes", controllers.guardarPersonaje)
router.delete("/api/personajes/:id", controllers.borrarPersonaje)
router.patch("/api/personajes/:id", controllers.actualizarPersonaje)
router.put("/api/personajes/:id", controllers.reemplazarPersonaje)

export default router