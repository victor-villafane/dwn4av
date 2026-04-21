import express from "express"
import ProductRoutes from "./routes/product.routes.js"
import PersonajesRoutes from "./routes/personajes.routes.js"
import ProductRoutesApi from "./api/routes/products.routes.js"
import PersonajesRoutesApi from "./api/routes/personajes.routes.js"

import swaggerFile from "./swagger.json" with {type: "json"}
import swaggerUI from "swagger-ui-express"

const app = express()
app.use("/", express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use( "/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile) )

app.use(ProductRoutes)
app.use(PersonajesRoutes)
app.use("/api", ProductRoutesApi)
app.use("/api", PersonajesRoutesApi)

app.listen(2026, () => console.log("Servidor funcionando en http://localhost:2026"))