import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"

const Detalle = () => {
    const [personaje, setPersonaje] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { idPersonaje } = useParams()

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/" + idPersonaje)
            .then(res => {
                if (res.ok) return res.json()
                throw new Error("No se encontro el personaje.")
            })
            .then(character => setPersonaje(character))
            .catch(err => setError(err))
            .finally( () => setLoading(false) )
    }, [])

    if (loading) return <div className="h1">Cargando..</div>
    if (error) return <div className="h1">No se encontro el personaje</div>

    return (
        <div className="card mb-3 p-1 border-0" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={personaje.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{personaje.name}</h5>
                        <p className="card-text">Ubicacion: {personaje.location.name}</p>
                        <p className="card-text"><small className="text-body-secondary">Aparecio en: </small> {personaje.episode.length}</p>
                    </div>
                    <div>
                        <Link className="btn btn-info" to="/">Volver</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalle