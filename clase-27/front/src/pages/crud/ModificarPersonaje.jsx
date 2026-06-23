import { useForm } from "react-hook-form"
import { usePersonajesService } from "../../services/personajes.service"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { usePersonaje } from "../../hooks/usePersonaje"
import { useToken } from "../../contexts/Session.context"

const ModificarPersonaje = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { isValid, errors }
    } = useForm()

    const navigate = useNavigate()
    const { idPersonaje } = useParams()
    const { updatePersonajes } = usePersonajesService()
    const { personaje, loading } = usePersonaje(idPersonaje)
    const token = useToken()
    const onSubmit = (formData) => {
        const data = new FormData()
        data.append("superhero", formData.superheroe)
        data.append("publisher", formData.editorial)
        data.append("alter_ego", formData.alterEgo)
        data.append("first_appearance", formData.firstAppearance)

        if (formData.portada?.[0]) {
            data.append("file", formData.portada[0])
        }
        console.log(token)
        fetch("http://localhost:2026/api/personajes/" + idPersonaje, {
            method: "PUT",
            body: data,
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
            .then(res => res.json())
            .then(data => console.log("data", data))
            .catch(err => console.log(err))
        // updatePersonajes(formData.superheroe, formData.editorial, formData.alterEgo, formData.firstAppearance, idPersonaje)
        //     .then(data => navigate("/"))
        //     .catch(err => console.log(err))
    }

    return (
        <div className="container">
            {loading != true && <div className="card mt-3 p-3">
                <p className="h1 mb-3 text-center" > Editar personaje </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3" >
                        <label className="form-label" >Superheroe </label>
                        <input className="form-control" type="text" name="superheroe" {...register("superheroe")} defaultValue={personaje?.superhero} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Editorial </label>
                        <input className="form-control" type="text" name="editorial" {...register("editorial")} defaultValue={personaje?.publisher} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Alter Ego </label>
                        <input className="form-control" type="text" name="alterEgo" {...register("alterEgo")} defaultValue={personaje?.alter_ego} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Primera aparicion </label>
                        <input className="form-control" type="text" name="firstAppearance" {...register("firstAppearance")} defaultValue={personaje?.first_appearance} />
                    </div>
                    <div className="mb-2" >
                        <label className="form-label" >Portada  Anterior:</label>
                        {
                            personaje?.portada
                                ? <img width="100px" src={`http://localhost:2026/portadas/${personaje.portada}`} alt="" />
                                : "Sin portada"
                        }
                        <input className="form-control" accept="image/*" type="file" name="portada" {...register("portada")} />
                    </div>
                    <button className="btn btn-primary" type="submit" >Guardar</button>
                </form> </div>}
        </div>
    )
}

export default ModificarPersonaje