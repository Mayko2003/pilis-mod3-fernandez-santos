import { FaLocationArrow, FaCity, FaGlobe, FaWind, FaTemperatureHigh } from 'react-icons/fa'
import { useContext } from 'react'
import { UbicacionContext } from '../../contexts/UbicacionContext'
import { UserContext } from '../../contexts/UserContext'




export const Card = ({ id, name, lat, lon, pais, windspeed, temp }) => {

    const { setUbicaciones, ubicaciones } = useContext(UbicacionContext)
    const { user } = useContext(UserContext)

    const removeUbi = (id) => {
        const newUbicaciones = ubicaciones.filter(ubicacion => ubicacion.id !== id)
        setUbicaciones(newUbicaciones)
    }


    return (
        <div className="mt-3 col-6 mx-auto card p-3 shadow-lg" >
            <center><h1><font color="blue">Ciudad</font></h1></center>
            <i><FaCity />{" Ciuadad: " + name}</i>
            <br />
            <i><FaLocationArrow />{" Latitud: " + lat}</i>
            <br />
            <i><FaLocationArrow />{" Longitud: " + lon}</i>
            <br />
            <i><FaGlobe />{" Pais: " + pais}</i>
            <br />
            <i><FaWind />{" Velocidad de Viento: " + windspeed}</i>
            <br />
            <i><FaTemperatureHigh />{" Temperatura: " + temp + "ºC"}</i>

            {
                user &&
                <div className="d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={() => removeUbi(id)}>Eliminar</button>
                </div>

            }


        </div>
    )
}
