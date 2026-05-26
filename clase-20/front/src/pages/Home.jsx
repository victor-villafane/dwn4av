import React from 'react'
import { Activity } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [personajes, setPersonajes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    fetch("http://localhost:2026/api/personajes", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        if (res.ok) return res.json()
        if (res.status == 401) navigate("/login")
        throw new Error("Error al traer los personajes")
      })
      .then(data => setPersonajes(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className='h1' >Cargando...</div>
  if (error) return <div className='h1' >No se pueden traer los personajes</div>

  return (
    <>
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
                <td>{personaje._id}</td>
                <td>{personaje.superhero}</td>
                <td>{personaje.publisher}</td>
                <td>
                  <Link className='btn btn-info' to={"/detalle/" + personaje._id} >Ver</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Home