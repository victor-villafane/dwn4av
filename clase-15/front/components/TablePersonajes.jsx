import ItemPersonaje from "./ItemPersonaje"

const TablePersonajes = ( {personajes} ) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre </th>
                    <th>Editorial </th>
                    <th>Alter Ego </th>
                    <th>Primera aparicion </th>
                    <th>Acciones </th>
                </tr>
            </thead>
            <tbody>
                {
                    personajes.map( personaje => <ItemPersonaje personaje={personaje} key={personaje._id}/> )
                }
            </tbody>
        </table>
    )
}

export default TablePersonajes