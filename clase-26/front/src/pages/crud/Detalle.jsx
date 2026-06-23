import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useToken } from "../../contexts/Session.context"
import { usePersonajesService } from "../../services/personajes.service"

const Detalle = () => {
    const [personaje, setPersonaje] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { idPersonaje } = useParams()
    const navigate = useNavigate()

    const { getPersonajesById } = usePersonajesService()

    useEffect(() => {
        getPersonajesById(idPersonaje)
            .then(data => setPersonaje(data.data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <div className="h1">Cargando..</div>
    if (error) return <div className="h1">No se encontro el personaje</div>

    return (
        <div className="card mb-3 p-1 border-0" >
            <div className="row g-0">
                <div className="col-md-4">
                    {personaje._id}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{personaje.superhero}</h5>
                        <p className="card-text">Editorial: {personaje.publisher}</p>
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