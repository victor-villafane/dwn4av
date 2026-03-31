// const http = require("http") //commonJS
import { createServer } from "http"
// const cafes = require("./data/productos.js")
import cafes from "./data/productos.js"
// const page = require("./page/utils.js")
import { createPage, createProductList } from "./page/utils.js"
import { readFile } from "fs"

const server = createServer((request, response) => {
    console.log(request.url)
    switch (request.url) {
        case "/":
            response.write(createPage("<h1>Mi nombre</h1>"))
            break;
        case "/materia":
            response.write(createPage("<h1>Aplicaciones hibridas</h1>"))
            break;
        case "/profesor":
            response.write(createPage("<h1>Mi nombre</h1>"))
            break;
        case "/productos":
            response.write(createPage(createProductList(cafes)))
            break;
        case "/archivo":
            readFile("./public/productos.json", (err, data) => {
                if (err) response.write(createPage("No se pudo leer el archivo."))
                response.write(createPage("<pre>" + data + "</pre>"))
                response.end()
            })
            break;
        case "/index.html":
            readFile("./public/index.html", (err, data) => {
                if (err) response.write(createPage("No se pudo leer el archivo."))
                response.write(data)
                response.end()
            })
            break
        case "/contacto.html":
            readFile("./public/contacto.html", (err, data) => {
                if (err) response.write(createPage("No se pudo leer el archivo."))
                response.write(data)
                response.end()
            })
            break
        case "/productos.html":
            readFile("./public/productos.html", (err, data) => {
                if (err) response.write(createPage("No se pudo leer el archivo."))
                response.write(data)
                response.end()
            })
            break
        case "/cafe.png":
            readFile("./public/cafe.png", (err, data) => {
                if (err) response.write(createPage("No se pudo leer el archivo."))
                response.write(data)
                response.end()
            })
            break
        case "/favicon.ico":
            readFile("./public/cafe.png", (err, data) => {
                if (err) response.write(createPage("No se pudo leer el archivo."))
                response.write(data)
                response.end()
            })
            break
        default:
            response.write(createPage("<h1>404</h1>"))
            break;
    }
    // response.end()
})

server.listen(2026, () => console.log("Funcionando..."))