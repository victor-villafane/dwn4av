import { MongoClient, ObjectId } from "mongodb"
import { createToken } from "./token.service.js"
import bcrypt from "bcryptjs"

const client = new MongoClient("mongodb+srv://admin:admin@dwn4av.gryz2kk.mongodb.net/") //se conectaron al cluster
const db = client.db("dwn4av")

export async function createUser(usuario) {
    await client.connect()

    const existe = await db.collection("usuarios").findOne({ email: usuario.email })
    if( existe ) throw new Error("No se pudo registrar")

    usuario.password = await bcrypt.hash(usuario.password, 11)

    await db.collection("usuarios").insertOne({...usuario, passwordConfirm: undefined})

    return { ...usuario, password: undefined }
}

export async function login(usuario) {
    await client.connect()
    const existe = await db.collection("usuarios").findOne({ email: usuario.email })

    if (!existe) throw new Error("No se pudo ingresar")

    const esValido = await bcrypt.compare( usuario.password, existe.password )

    if ( !esValido ) throw new Error("No se pudo ingresar")
    
    const token = createToken(existe)

    return { ...existe, password: undefined, _id: undefined, token: token }
}