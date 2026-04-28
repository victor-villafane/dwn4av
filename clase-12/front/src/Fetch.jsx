import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [imgUrl, setImgUrl] = useState("")
    const [razas, setRazas] = useState([])
    const [ razaSeleccionada, setRazaSeleccionada ] = useState("")

    const traerRazas = () => {
        console.log("Traer Razas")
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {

                }
            })
            .then(data => setRazas(Object.keys(data.message)))
            .catch(err => console.error(err))
    }

    const traerFoto = () => {
        fetch(`https://dog.ceo/api/breed/${razaSeleccionada}/images/random`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {

                }
            })
            .then(data => setImgUrl(data.message))
            .catch(err => console.error(err))
    }

    // const handleSelect = (event) => {
    //     setRazaSeleccionada(event.target.value)
    // }
    // if( razas.length == 0 ){
    //     traerRazas()
    // }

    useEffect(() => {
        //Se ejecuta cuando se monto el componente -> componentDidMount
        traerRazas()
    }, [])

    useEffect(() => {
        //Se ejecuta cuando se monto el componente -> componentDidMount
        if(razaSeleccionada != "") traerFoto()
    }, [razaSeleccionada])

    return (
        <div>
            <select onChange={ (event) => setRazaSeleccionada(event.target.value) } >
                {
                    razas.map((raza, indice) => <option key={indice} value={raza}>{raza}</option>)
                }
            </select>
            <button onClick={traerFoto} >Foto!</button>
            <button onClick={traerRazas} >Razas!</button>
            <img src={imgUrl} alt="" width={100} />
        </div>
    )
}

export default Fetch