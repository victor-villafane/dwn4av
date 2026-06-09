import { useApi } from "./api.service";

export function usePersonajesService() {
    const { call } = useApi()

    const getPersonajes = () => call("/personajes")
    const getPersonajesById = (idPersonaje) => call("/personajes/" + idPersonaje)
    const createPersonajes = (superheroe, editorial, alterEgo, firstAppearance) =>
        call("/personajes", "POST", {
            superhero: superheroe,
            publisher: editorial,
            alter_ego: alterEgo,
            first_appearance: firstAppearance
        })
    const updatePersonajes = (superheroe, editorial, alterEgo, firstAppearance, idPersonaje) =>
        call("/personajes/" + idPersonaje, "PUT", {
            superhero: superheroe,
            publisher: editorial,
            alter_ego: alterEgo,
            first_appearance: firstAppearance
        })
    const deletePersonaje = (idPersonaje) => call("/personajes/" + idPersonaje, "DELETE")
    
    return { getPersonajes, getPersonajesById, createPersonajes, updatePersonajes, deletePersonaje }
}