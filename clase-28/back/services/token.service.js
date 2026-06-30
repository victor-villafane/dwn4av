import jwt from "jsonwebtoken"

/*
valor dinámico almacenado en el sistema operativo (fuera del código fuente) que indica a los programas detalles sobre el entorno en el que se ejecutan, como rutas de carpetas del sistema, configuraciones de idioma o credenciales de seguridad
*/

export function createToken(usuario){
    const token = jwt.sign({ ...usuario, password: undefined, _id: undefined }, process.env.SECRET_PASSWORD, { expiresIn: "2h" })
    return token
}

export function validateToken(token){
    const payload = jwt.verify(token, process.env.SECRET_PASSWORD) //Valida tambien si el token expiro
    return payload
}