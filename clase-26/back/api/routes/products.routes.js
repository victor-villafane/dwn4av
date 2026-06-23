import express from 'express'
import * as controllers from "../controllers/products.controllers.js"
import { validateProducto } from '../../middlewares/producto.validate.js'
import { validateToken } from '../../middlewares/token.validate.js'

const router = express.Router()
router.get("/productos", [validateToken] ,controllers.getProductos)
router.get("/productos/:id", controllers.getProductoById)
router.post("/productos", [validateProducto], controllers.guardarProducto)
router.delete("/productos/:id",[validateProducto], controllers.borrarProducto)
router.patch("/productos/:id",[validateProducto], controllers.actualizarProducto)
router.put("/productos/:id",[validateProducto] ,controllers.reemplazarProducto)

export default router