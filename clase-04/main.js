import express from "express"

const app = express()
let contador = 0
const comentarios = []

app.use("/", express.static('public'))
app.use(express.urlencoded({extended: true}))
// app.use(express.json())

app.get("/contador", (req, res) => {
    contador++
    res.send(`Contador: ${contador}`)
})
/*
    GET - URL (QUERY) - No necesito middleware
    POST - body - Necesito middleware, app.use(express.urlencoded({extended: true})) o app.use(express.json())
*/
app.get("/comentario", (req, res) => {
    console.log(req.query.email)
    comentarios.push({email: req.query.email, comentario: req.query.comentario})
    res.send("Comentario recibido!")
    console.log(comentarios)
} )

app.post("/comentario", (req, res) => {
    console.log(req.body)
    comentarios.push({email: req.body.email, comentario: req.body.comentario})
    res.send("Comentario recibido!")
    console.log(comentarios)
} )

// app.get("/", (req, res) => {
//     res.send("Home")
// })


app.listen( 2026, () => console.log("Servidor funcionando en http://localhost:2026") )