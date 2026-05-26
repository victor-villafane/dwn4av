import { MongoClient, ObjectId } from "mongodb"
import jwt from "jsonwebtoken"

const client = new MongoClient("mongodb+srv://admin:admin@dwn4av.gryz2kk.mongodb.net/") //se conectaron al cluster
const db = client.db("dwn4av")

export async function createUser(usuario) {
    await client.connect()

    await db.collection("usuarios").insertOne(usuario)

    return { ...usuario, password: undefined }
}

export async function login(usuario) {
    await client.connect()
    const existe = await db.collection("usuarios").findOne({ email: usuario.email })


    if (!existe) throw new Error("No se pudo ingresar")
    if (usuario.password != existe.password) throw new Error("No se pudo ingresar")
    
    const token = jwt.sign({ ...existe, password: undefined, _id: undefined }, "1234", { expiresIn: "2h" })

    console.log(token)

    return { ...existe, password: undefined, _id: undefined, token: token }
}