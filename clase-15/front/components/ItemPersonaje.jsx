import { Link } from "react-router"

const ItemPersonaje = ({ personaje }) => {
    return (
        <tr>
            <td>{personaje._id}</td>
            <td>{personaje.superhero}</td>
            <td>{personaje.publisher}</td>
            <td>{personaje.alter_ego}</td>
            <td>{personaje.first_appearance}</td>
            <td>
                <Link to={"/detalle/" + personaje._id}>Ver</Link>
            </td>
        </tr>)
}

export default ItemPersonaje