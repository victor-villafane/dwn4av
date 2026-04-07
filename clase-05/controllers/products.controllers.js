import { createPage } from "../page/utils.js"
import * as productsService from "../services/products.services.js"
import * as productsView from "../views/products.views.js"

export function getProductos(req, res){
    productsService.getProductos()
        .then(cafes => res.send(productsView.createProductList(cafes)))
        .catch(err => res.send("No se pudo leer el archivo"))
}

export function getProductosById(req, res){
    const id = req.params.id
    productsService.getProductosById(id)
        .then( cafe => res.send(productsView.createProductPage(cafe))) 
        .catch( err => res.send(productsView.create404Page())) 
}

export function productForm(req, res){
    res.send( productsView.createProductForm() ) 
}

export function productSave(req, res){
    const producto = req.body
    console.log(producto)
    productsService.productSave(producto)
        .then( (productoGuardado) => res.send(productsView.createProductPage(productoGuardado)))
        .catch( (err) => res.send("No se pudo guardar el archivo") )
}