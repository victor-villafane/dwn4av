const ItemPersonaje = ({ personaje }) => {
    return (
        <tr>
            <td>{personaje._id}</td>
            <td>{personaje.superhero}</td>
            <td>{personaje.publisher}</td>
            <td>{personaje.alter_ego}</td>
            <td>{personaje.first_appearance}</td>
        </tr>)
}

export default ItemPersonaje