import { useForm } from "react-hook-form"
import { usePersonajesService } from "../../services/personajes.service"
import { useNavigate } from "react-router-dom"
const NuevoPersonaje = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { isValid, errors }
    } = useForm()
    const navigate = useNavigate()
    const { createPersonajes } = usePersonajesService()

    const onSubmit = (formData) => {
        createPersonajes(formData.superheroe, formData.editorial, formData.alterEgo, formData.firstAppearance )
            .then( data => navigate("/") )
            .catch( err => console.log(err) )
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Superheroe </label>
                    <input type="text" name="superheroe" { ...register("superheroe") }/>
                </div>
                <div>
                    <label>Editorial </label>
                    <input type="text" name="editorial" { ...register("editorial") }/>
                </div>
                <div>
                    <label>Alter Ego </label>
                    <input type="text" name="alterEgo" { ...register("alterEgo") }/>
                </div>
                <div>
                    <label>Primera aparicion </label>
                    <input type="date" name="firstAppearance" { ...register("firstAppearance") }/>
                </div>
                <button type="submit" >Guardar</button>
            </form>
        </div>
    )
}

export default NuevoPersonaje