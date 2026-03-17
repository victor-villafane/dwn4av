const http = require("http")

const server = http.createServer( (request, response) => {
    console.log(request.url)
    response.write(`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>`)
    if( request.url == "/materia" ){
        response.write("<h1>AH ñ</h1>")
    }
    if( request.url == "/profesor" ){
        response.write("yo")
    }
    response.write(`</body></html>`)
    response.end()
} )

server.listen(2026, () => console.log("Funcionando..."))