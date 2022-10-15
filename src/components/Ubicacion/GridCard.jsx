import { useContext } from "react"
import { UbicacionContext } from "../../contexts/UbicacionContext"
import { Card } from "./Card"

export const GridCard = () => {

    const { ubicaciones } = useContext(UbicacionContext)

    return (
        <div className="col-10 mx-auto">
            {
                ubicaciones ?
                    (
                        ubicaciones.length > 0 ?
                            (
                                ubicaciones.map(ubicacion => (
                                    <Card key={ubicacion.id} {...ubicacion} />
                                ))
                            ) :
                            (
                                <h3 className="text-center text-secondary mt-5">No hay ubicaciones</h3>
                            )
                    ) :
                    (
                        <div className="d-flex justify-content-center mt-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>

                    )
            }
        </div>
    )
}
