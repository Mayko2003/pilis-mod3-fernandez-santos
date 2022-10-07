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
                            <div key={ubicacion.id} >
                                {ubicacion.name}
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
