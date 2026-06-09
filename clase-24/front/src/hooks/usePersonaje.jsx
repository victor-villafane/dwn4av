import { useState, useEffect } from "react";
import { usePersonajesService } from "../services/personajes.service";

export const usePersonaje = (idPersonaje) => {
    const [personaje, setPersonaje] = useState(null)
    const [loading, setLoading] = useState(true)

    const { getPersonajesById } = usePersonajesService()

    useEffect(() => {
        getPersonajesById(idPersonaje)
            .then(data => {
                setPersonaje(data.data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return { personaje, loading }
}

export const usePersonajes = () => {
    const [personajes, setPersonajes] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { getPersonajes } = usePersonajesService()

    useEffect(() => {
        getPersonajes()
            .then(data => {
                setPersonajes(data)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { personajes, loading, error }
}