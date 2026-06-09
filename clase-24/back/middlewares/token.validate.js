import { validateToken as validarToken } from "../services/token.service.js"

export function validateToken(req, res, next){
    try {
        const auth = req.headers.authorization
        console.log(auth.authorization)
        const [ bearer, token ] = auth.split(" ")
        
        if( bearer != "Bearer" || !token ) return res.status(401).json({ message: "token invalido" })

        const usuario = validarToken(token)

        req.usuario = usuario
        next()
    } catch (error) {
        res.status(401).json({ message: "token invalido" })
    }
}