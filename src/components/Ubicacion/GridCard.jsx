import { useContext } from "react"
import { UbicacionContext } from "../../contexts/UbicacionContext"
import { Card } from "./Card"

export const GridCard = () => {

    const { ubicaciones } = useContext(UbicacionContext)

    return (
        <div className="col-10">
            {
                ubicaciones.length > 0 ?
                    (
                        ubicaciones.map(ubicacion => (
                            <div className="mt-3 col-6 mx-auto card p-3 shadow-lg" key={ubicacion.id} >
                                <center><h1><font color="blue">Ciudad</font></h1></center>
                                <i class="fa fa-city">{" Ciuadad: " + ubicacion.name}</i>
                                <br />
                                <i class="fa fa-location-arrow mt-3">{" Latitud: " + ubicacion.lat}</i>
                                <br />
                                <i class="fa fa-location-arrow mt-3">{" Longitud: " + ubicacion.lon}</i>
                                <br />
                                <i class="fa fa-globe mt-3">{" Pais: " + ubicacion.pais}</i>
                                <br />
                                <i class="fa fa-wind mt-3">{" Velocidad de Viento: " + ubicacion.winspeed}</i>
                                <br />
                                <i class="fa fa-temperature-high mt-3">{" Temperatura: " + ubicacion.temp + "ºC"}</i>
                            </div>
                        ))
                    ) :
                    (
                        <div className="spinner-border mx-auto" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )
            }
        </div>
    )
}
