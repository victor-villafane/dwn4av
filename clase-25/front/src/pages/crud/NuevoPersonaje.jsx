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
        const data = new FormData()
        data.append("superheroe", formData.superheroe)
        data.append("editorial", formData.editorial)
        data.append("alterEgo", formData.alterEgo)
        data.append("firstAppearance", formData.firstAppearance)

        if (formData.portada?.[0]) {
            data.append("file", formData.portada[0])
        }
        console.log(data)
        fetch("http://localhost:2026/api/personajes", {
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then(data => console.log("data", data))
            .catch(err => console.log(err))
        // createPersonajes(formData.superheroe, formData.editorial, formData.alterEgo, formData.firstAppearance)
        //     .then(data => navigate("/"))
        //     .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="card mt-3 p-3">
                <p className="h1 mb-3 text-center" > Nuevo personaje </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2" >
                        <label className="form-label" >Superheroe </label>
                        <input className="form-control" type="text" name="superheroe" {...register("superheroe")} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label" >Editorial </label>
                        <input className="form-control" type="text" name="editorial" {...register("editorial")} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label" >Alter Ego </label>
                        <input className="form-control" type="text" name="alterEgo" {...register("alterEgo")} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label" >Primera aparicion </label>
                        <input className="form-control" type="date" name="firstAppearance" {...register("firstAppearance")} />
                    </div>
                    <div className="mb-2" >
                        <label className="form-label" >Portada:</label>
                        <input className="form-control" accept="image/*" type="file" name="portada" {...register("portada")} />
                    </div>
                    <button className="btn btn-primary" type="submit" >Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default NuevoPersonaje