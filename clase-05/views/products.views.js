import { createPage } from "../page/utils.js"

export function createProductList(cafes) {
    let html = ""
    html += "<h1>Listado de productos</h1>"
    html += "<a href='/productos/agregar' >Nuevo producto</a>"
    html += "<ul>"
    cafes.forEach(cafe => html += "<li>" + cafe.nombre + `<a href="/productos/${cafe.id}" >Ver</a>` + "</li>")
    html += "</ul>"
    return createPage(html)
}

export function createProductPage(producto) {
    let html = ""
    html += "<h1>Productos</h1>"
    html += "<p>"+ producto.id +"</p>"
    html += "<h2>" + producto.nombre +"</h2>"
    html += "<p>$" + producto.precio +"</p>"
    html += "<a href='/productos' >Volver</a>"
    return createPage(html)
}


export function create404Page() {
    let html = ""
    html += "<h1>404 page not found</h1>"
    html += "<a href='/productos' >Volver</a>"
    return createPage(html)
}

export function createProductForm(){
    let html = ""
    html += "<h2>Agregar nuevo producto</h2>"
    html += "<form action='/productos/agregar' method='post'>"
    html += "<div>"
    html += "<label>Nombre</label>"
    html += "<input type='text' name='nombre' />"
    html += "</div>"
    html += "<div>"
    html += "<label>Precio</label>"
    html += "<input type='text' name='precio' />"
    html += "</div>"
    html += "<input type='submit' value='agregar' />"
    html += "</form>"
    html += "<a href='/productos' >Volver</a>"
    return createPage(html)
}