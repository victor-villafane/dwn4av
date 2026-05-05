import { useEffect, useState } from "react"
import TablePersonajes from "../components/TablePersonajes"

const Personajes = () => {

    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        fetch("http://localhost:2026/api/personajes")
            .then(res => res.json())
            .then(data => setPersonajes(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <TablePersonajes personajes={personajes}></TablePersonajes>
    )
}

export default Personajes