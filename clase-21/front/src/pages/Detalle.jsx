import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const Detalle = () => {
    const [personaje, setPersonaje] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { idPersonaje } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://localhost:2026/api/personajes/" + idPersonaje, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                if (res.ok) return res.json()
                if( res.status == 401 ) navigate("/login")
                throw new Error("Error al traer los personajes")
            })
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