import { readFile, writeFile, access } from "fs/promises"
import { constants } from "fs/promises"

const archivo = "./data/productos.json"
export function getProductos() {
    return readFile(archivo, "utf-8")
        .then(cafes => JSON.parse(cafes).filter( cafe => cafe.borrado != true ))
        .catch(err => [])
}

export function getProductosById(id) {
    return getProductos()
        .then(cafes => cafes.find(cafe => cafe.id == id))
}

export async function productSave(producto) {
    try {
        const productos = await getProductos()
        producto.id = productos.length + 1
        productos.push(producto)
        await access(archivo, constants.F_OK)
        await writeFile(archivo, JSON.stringify(productos))
        return producto
    } catch (error) {
        throw new Error(error)
    }
}

export async function editProductosById(id, producto) {
    console.log(producto, id)
    try {
        const productos = await getProductos()

        // const productosFiltrados = productos.filter( (producto) => producto.id != id )
        // producto.id = id

        // productosFiltrados.push( producto )

        productos.forEach(item => {
            if (item.id == id) {
                item.nombre = producto.nombre
                item.precio = producto.precio
            }
        });

        await access(archivo, constants.F_OK)
        await writeFile(archivo, JSON.stringify(productos))
        return producto
    } catch (error) {
        throw new Error(error)
    }
}

export async function deleteProduct(id) {
    try {
        const productos = await getProductos()
        let productoBorrado = {}
        // const productosFiltrados = productos.filter(producto => {
        //     if(producto.id != id){
        //         return true
        //     }else{
        //         productoBorrado = producto
        //         return false
        //     }
        // })
        productos.forEach((producto) => {
            if (producto.id == id) {
                productoBorrado = producto
                producto.borrado = true
            }
        })
        await access(archivo, constants.F_OK)
        await writeFile(archivo, JSON.stringify(productos))
        return productoBorrado
    } catch (error) {
        throw new Error(error)
    }

}