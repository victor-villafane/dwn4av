import { readFile, writeFile, access } from "fs/promises"
import { constants } from "fs/promises"
import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb+srv://admin:admin@dwn4av.gryz2kk.mongodb.net/")
const db = client.db("dwn4av")

const archivo = "./data/productos.json"

export async function getProductos( filter = {} ) {
    try {
        await client.connect()
        const filterMongo = { borrado: { $ne:true } }
        if( filter?.precio_max ) filterMongo.precio = { $lt: parseInt( filter?.precio_max ) }
        if( filter?.precio_min ) filterMongo.precio = { $gt: parseInt( filter?.precio_min ) }
        return db.collection("cafes").find( filterMongo ).toArray()
    } catch (error) {
        return []
    }
}

export async function getProductosById(id) {
    try {
        await client.connect()
        return db.collection("cafes").findOne({ _id: new ObjectId(id) })
    } catch (error) {
        return {}
    }
}

export async function productSave(producto) {
    try {
        await client.connect()
        return db.collection("cafes").insertOne(producto)
    } catch (error) {
        throw new Error(error)
    }
}

export async function editProductosById(producto) {
    try {
        // console.log(producto)
        await client.connect()
        const { _id, ...productoSinId } = producto
        await db.collection("cafes").updateOne({ _id: new ObjectId(_id) }, {
            $set: productoSinId
        })
        return producto._id
    } catch (error) {
        throw new Error(error)
    }
}

export async function deleteProduct(id) {
    try {
        await client.connect()
        console.log(id)
        await db.collection("cafes").updateOne({ _id: new ObjectId(id) }, {
            $set: {
                borrado: true
            }
        })
        return id
    } catch (error) {
        throw new Error(error)
    }

}