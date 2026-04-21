import { MongoClient, ObjectId } from "mongodb"
import { getProductosById } from "./products.services.js"
const client = new MongoClient("mongodb+srv://admin:admin@dwn4av.gryz2kk.mongodb.net/") //se conectaron al cluster
const db = client.db("dwn4av")                                                          //se conectaron a la db

export async function getPersonajes(filter = {}) {
    const filterMongo = {}
    if (filter?.nombre) filterMongo.$text = { $search: filter.nombre }
    if (filter?.publicado) filterMongo.publisher = filter.publicado
    return db.collection("personajes").find(filterMongo).toArray()
}

export async function asignarFavorito(idPersonaje, idCafe) {
    try {        
        await client.connect()
        const cafe = await getProductosById(idCafe)
        return await db.collection("personajes").updateOne(
            { _id: new ObjectId(idPersonaje) }, 
            {
                $push: { cafes: { ...cafe } }       //https://www.mongodb.com/es/docs/manual/reference/operator/update/push/
                                                    //https://www.mongodb.com/es/docs/manual/reference/operator/update/addToSet/
            })
    } catch (error) {
        
    }
}