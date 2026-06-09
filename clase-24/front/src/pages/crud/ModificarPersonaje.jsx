import { useForm } from "react-hook-form"
import { usePersonajesService } from "../../services/personajes.service"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { usePersonaje } from "../../hooks/usePersonaje"

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

    const onSubmit = (formData) => {
        console.log(formData)
        updatePersonajes(formData.superheroe, formData.editorial, formData.alterEgo, formData.firstAppearance, idPersonaje)
            .then(data => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            {loading != true && <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Superheroe </label>
                    <input type="text" name="superheroe" {...register("superheroe")} defaultValue={personaje?.superhero}/>
                </div>
                <div>
                    <label>Editorial </label>
                    <input type="text" name="editorial" {...register("editorial")} defaultValue={personaje?.publisher}/>
                </div>
                <div>
                    <label>Alter Ego </label>
                    <input type="text" name="alterEgo" {...register("alterEgo")} defaultValue={personaje?.alter_ego}/>
                </div>
                <div>
                    <label>Primera aparicion </label>
                    <input type="text" name="firstAppearance" {...register("firstAppearance")} defaultValue={personaje?.first_appearance}/>
                </div>
                <button type="submit" >Guardar</button>
            </form>}
        </div>
    )
}

export default ModificarPersonaje