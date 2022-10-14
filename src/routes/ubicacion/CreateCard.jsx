import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { getCity, getWeather } from "../../api/weatherAPI"
import { UbicacionContext } from "../../contexts/UbicacionContext"



export const CreateCard = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { setUbicaciones, ubicaciones } = useContext(UbicacionContext)

    const navigate = useNavigate()

    const onSubmitForm = (data) => {
        let lat, long, pais
        getCity(data.nombre).then(({ results }) => {
            console.log(results[0])
            lat = results[0].latitude
            long = results[0].longitude
            pais = results[0].country
            getWeather(lat, long).then(res => {
                const city = {
                    id: ubicaciones.length + 1,
                    name: data.nombre,
                    lat: lat,
                    long: long,
                    pais: pais,
                    windspeed: res.current_weather.windspeed,
                    temp: res.current_weather.temperature,
                }
                setUbicaciones([...ubicaciones, city])
            })
        }).catch(err => {
            console.log(err)
        })
        
        navigate('/')
    }

    return (
        <div className="mt-5 col-6 mx-auto card p-3 shadow-lg">
            <h1 className="text-center">Crea tu ubicacion!!!</h1>
            <form action="" onSubmit={handleSubmit(onSubmitForm)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre de la ciudad"
                        id="nombre" {...register("nombre", { required: 'El nombre es requerido' })}
                    />
                    <div className="alert-danger">{errors.nombre?.message}</div>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <button className="btn btn-primary" type="submit">Crear</button>
                </div>
            </form>
        </div>
    )
}
