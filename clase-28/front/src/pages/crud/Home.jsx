import { Link } from 'react-router-dom'
import { usePersonajes } from '../../hooks/usePersonaje'
import { useRol } from '../../contexts/Session.context'

const Home = () => {
  const { personajes, loading, error } = usePersonajes()
  const rol = useRol()
  if (loading) return <div className='h1' >Cargando...</div>
  if (error) return <div className='h1' >No se pueden traer los personajes</div>

  return (
    <div className='container-fluid'>
      {rol >= 1 && <Link to="/nuevo-personaje" className='btn btn-primary my-2' >Nuevo personaje</Link>}
      <table className='table mt-3'>
        <thead>
          <tr>
            <th>#</th>
            <th>Super Heroe</th>
            <th>Editorial</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            personajes.map(personaje => (
              <tr key={personaje._id} >
                <td>{
                  personaje?.portada
                    ? <img width="100px" src={`${import.meta.env.VITE_API_URL}/portadas/${personaje.portada}`} alt="" />
                    : "Sin portada"
                }</td>
                <td>{personaje.superhero}</td>
                <td>{personaje.publisher}</td>
                <td >
                  <Link className='btn btn-info m-1' to={"/detalle/" + personaje._id} >Ver</Link>
                  { rol >= 1 && <Link className='btn btn-warning m-1' to={"/modificar-personaje/" + personaje._id} >Editar</Link>}
                  { rol >= 2 && <Link className='btn btn-danger m-1' to={"/borrar-personaje/" + personaje._id} >Borrar</Link>}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home