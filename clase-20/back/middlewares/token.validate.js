import jwt from "jsonwebtoken"

export function validateToken(req, res, next){
    try {
        const auth = req.headers.authorization
        console.log(auth.authorization)
        const [ bearer, token ] = auth.split(" ")
        
        if( bearer != "Bearer" || !token ) return res.status(401).json({ message: "token invalido" })

        const usuario = jwt.verify(token, "1234") //Valida tambien si el token expiro
        console.log(usuario)

        req.usuario = usuario
        next()
    } catch (error) {
        res.status(401).json({ message: "token invalido" })
    }
}