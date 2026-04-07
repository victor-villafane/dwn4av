import express from "express"
import * as productsController from "../controllers/products.controllers.js"

const route = express.Router()

route.get("/productos", productsController.getProductos)
route.get("/productos/agregar", productsController.productForm)
route.post("/productos/agregar", productsController.productSave)

route.get("/productos/:id", productsController.getProductosById)

export default route