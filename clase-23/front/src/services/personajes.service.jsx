import { useApi } from "./api.service";

export function usePersonajesService(){
    const { call } = useApi()

    const getPersonajes = () => call("/personajes")
    const getPersonajesById = (idPersonaje) => call("/personajes/" + idPersonaje)

    return { getPersonajes, getPersonajesById }
}