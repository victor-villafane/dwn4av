import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../contexts/Session.context'
import { useUsuariosService } from '../services/usuarios.service'

const Login = () => {
  const navigate = useNavigate()

  const login = useLogin()
  const { login: loginService } = useUsuariosService()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const pass = e.target.pass.value
      loginService({
        email: email,
        password: pass
      })
      .then(data => {
        login(data.token, email)
        navigate("/")
      })
      .catch(err => console.error("No se pudo loguear"))
  }

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100' >
      <div className='card p-4 shadow' style={{ width: '350px' }} >
        <h2 className='text-center mb-4' > Iniciar Session </h2>
        <form onSubmit={handleSubmit} >
          <div className='mb-3'>
            <label className='form-label' >Email: </label>
            <input type="email" placeholder='Ingrese su mail' className='form-control' name='email' />
          </div>
          <div className='mb-3'>
            <label className='form-label' >Contraseña: </label>
            <input type="text" placeholder='Ingrese su password' className='form-control' name='pass' />
          </div>
          <button type='submit' className='btn btn-primary w-100' >Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default Login