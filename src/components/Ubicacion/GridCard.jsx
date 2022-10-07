import { useContext } from "react"
import { UbicacionContext } from "../../contexts/UbicacionContext"
import { Card } from "./Card"

export const GridCard = () => {

    const { ubicaciones } = useContext(UbicacionContext)

    return (
        <div className="container">
            {
                ubicaciones.length > 0 ?
                    (
                        ubicaciones.map(ubicacion => (
                            <Card key={[ubicacion.latitude, ubicacion.longitude]} {...ubicacion} />
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
