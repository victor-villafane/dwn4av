import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"

const Detalle = () => {
    const { id } = useParams()
    const [ personaje, setPersonaje ] = useState({})
    useEffect( () => {
        fetch( "http://localhost:2026/api/personajes/"+ id )
            .then( res => res.json() )
            .then( personaje => setPersonaje(personaje.data || {}) )
            .catch( err => console.error(err) )
    }, [] )

    if(Object.keys( personaje ) == 0){
        return <div>Error al encontrar el personaje</div>
    }

    // console.log(personaje)

    return (
        <div>
            <h1 className="text-4xl" >{personaje.superhero}</h1>
            <p><strong>Alter Ego:</strong> {personaje.alter_ego}</p>
            <p><strong>Characters:</strong> {personaje.characters}</p>
            <p><strong>Primera aparicion:</strong> {personaje.first_appearance}</p>
            <p><strong>Publicado:</strong> {personaje.publisher}</p>
            <Link to="/">Volver</Link>
    </div>
    )
}

export default Detalle