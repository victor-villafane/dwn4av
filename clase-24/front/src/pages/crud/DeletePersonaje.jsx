import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { usePersonajesService } from "../../services/personajes.service"

const DeletePersonaje = () => {
    const [personaje, setPersonaje] = useState(null)
    const { idPersonaje } = useParams()
    const { getPersonajesById, deletePersonaje } = usePersonajesService()

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        deletePersonaje(idPersonaje)
            .then(() => navigate("/"))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPersonajesById(idPersonaje)
            .then(data => {
                setPersonaje(data.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="d-flex justify-content-center align-items-center flex-column" >
            <p className="fs-1" >Desea borrar <b>{personaje?.superhero}</b>?</p>
            <form onSubmit={handleSubmit} className="d-flex gap-2" >
                <button type="submit" className="btn btn-danger" >Si</button>
                <Link className="btn btn-primary" to="/">No</Link>
            </form>
        </div>
    )
}

export default DeletePersonaje