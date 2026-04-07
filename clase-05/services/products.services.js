import { readFile, writeFile, access } from "fs/promises"
import { constants } from "fs/promises"

const archivo = "./data/productossssssssssss.json"
export function getProductos() {
    return readFile(archivo, "utf-8")
        .then(cafes => JSON.parse(cafes))
        .catch(err => [])
}

export function getProductosById(id) {
    return getProductos()
            .then( cafes => cafes.find( cafe => cafe.id == id ) )
}

export async function productSave(producto){
    try {        
        const productos = await getProductos()
        producto.id = productos.length + 1
        productos.push(producto)
        await access(archivo, constants.F_OK)
        await writeFile( archivo, JSON.stringify(productos) )
        return producto
    } catch (error) {
        throw new Error(error)
    }
}