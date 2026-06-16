import express from 'express'
import * as controllers from "../controllers/personajes.controllers.js"
import { personajeValidate } from '../../middlewares/personajes.validate.js'
import { validateToken } from '../../middlewares/token.validate.js'
import multer from 'multer'
import upload, { resizeImage } from '../../middlewares/imagenes.upload.js'

const router = express.Router()
router.get("/api/personajes",[validateToken], controllers.getPersonajes)
router.post("/api/personajes/:id",[validateToken], controllers.asignarFavorito)
router.post("/api/personajes/:id/cafe",[validateToken], controllers.crearCafe)
router.get("/api/personajes/:id/cafe",[validateToken], controllers.getCafeCreado)
router.get("/api/personajes/:id",[validateToken], controllers.getPersonajeById)
router.post("/api/personajes",[upload.single("file")/*, validateToken, personajeValidate*/],controllers.guardarPersonaje)
router.delete("/api/personajes/:id",[validateToken], controllers.borrarPersonaje)
router.patch("/api/personajes/:id",[validateToken], [personajeValidate], controllers.actualizarPersonaje)
router.put("/api/personajes/:id",[upload.single("file"), resizeImage, /*validateToken, personajeValidate*/],controllers.reemplazarPersonaje)

export default router