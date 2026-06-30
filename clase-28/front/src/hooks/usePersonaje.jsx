import { useState, useEffect } from "react";
import { usePersonajesService } from "../services/personajes.service";
import { socket } from "../services/socket.service"

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

    const fetchPersonajes = () => {
        getPersonajes()
            .then(data => {
                setPersonajes(data)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        // navigator.geolocation.getCurrentPosition( (position) => {
        //     console.log(position)
        // } )
        // let intervalo = setInterval( () => {
        socket.on("nuevo-personaje", fetchPersonajes)
        // }, 3000 )
        fetchPersonajes()
        return () => {
            // clearInterval( intervalo )
        }
    }, [])

    return { personajes, loading, error }
}