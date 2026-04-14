import express from "express"
import ProductRoutes from "./routes/product.routes.js"
import ProductRoutesApi from "./api/routes/products.routes.js"

const app = express()

app.use("/", express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(ProductRoutes)
app.use("/api", ProductRoutesApi)

app.listen(2026, () => console.log("Servidor funcionando en http://localhost:2026"))