import React from 'react'
import { Activity } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [personajes, setPersonajes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=" + page)
      .then(res => {
        if (res.ok) return res.json()
        throw new Error("Error al traer los personajes")
      })
      .then(data => setPersonajes(data.results))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [page])

  if (loading) return <div className='h1' >Cargando...</div>
  if (error) return <div className='h1' >No se pueden traer los personajes</div>

  return (
    <>
      <table className='table mt-3'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Episodios</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            personajes.map(personaje => (
              <tr key={personaje.id} >
                <td>
                  <img
                    src={personaje.image}
                    className='img-fluid'
                    style={{ maxWidth: "100px" }}
                    alt=""
                  />
                </td>
                <td>
                  {personaje.name}
                </td>
                <td>
                  {
                    personaje.episode.length
                  }
                </td>
                <td>
                  <Link className='btn btn-info' to={"/detalle/" + personaje.id} >Ver</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Activity mode={page > 1 ? 'visible' : "hidden"} >
        <button className='btn' onClick={() => setPage(page - 1)} >Prev</button>
      </Activity>
      {
        [...Array(42)].map((valor, indice) => (
          <button onClick={ () => setPage( indice + 1 ) } className={page == (indice + 1)
            ? "btn btn-primary"
            : "btn btn-outline-primary"}
            key={indice} >
            {indice + 1}
          </button>
        ))
      }
      <Activity mode={page < 42 ? 'visible' : 'hidden'}>
        <button className='btn' onClick={() => setPage(page + 1)} >Next</button>
      </Activity>
    </>
  )
}

export default Home