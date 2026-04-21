import express from 'express'
import * as controllers from "../controllers/personajes.controllers.js"

const router = express.Router()

router.get("/personajes", controllers.getPersonajes)
router.post("/personajes/:id", controllers.asignarFavorito)
// router.get("/productos/:id", controllers.getProductoById)
// router.post("/productos", controllers.guardarProducto)
// router.delete("/productos/:id", controllers.borrarProducto)
// router.patch("/productos/:id", controllers.actualizarProducto)
// router.put("/productos/:id", controllers.reemplazarProducto)

export default router