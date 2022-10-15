import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { getCity, getWeather } from "../../api/weatherAPI"
import { UbicacionContext } from "../../contexts/UbicacionContext"



export const CreateCard = () => {

    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm()

    const { setUbicaciones, ubicaciones } = useContext(UbicacionContext)

    const [currIndex, setCurrIndex] = useState(-1)

    const [dispCiudades, setDispCiudades] = useState([])

    const navigate = useNavigate()

    const onSubmitForm = (data) => {
        let lat = getValues("latitud"), lon = getValues("longitud")
        getCity(data.nombre).then(({ results }) => {

            getWeather(lat, lon).then(res => {
                const city = {
                    id: ubicaciones[ubicaciones.length - 1].id + 1,
                    name: data.nombre,
                    lat: lat,
                    lon: lon,
                    pais: currIndex === -1 ? 'Desconocido' : dispCiudades[currIndex].country,
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

    const handleSearch = (e) => {
        const name = e.target.value
        getCity(name).then(({ results }) => {
            setDispCiudades(results)
            if (results) {
                setValue('latitud', results[0].latitude)
                setValue('longitud', results[0].longitude)
                setCurrIndex(0)
            }
            else {
                setValue('latitud', '')
                setValue('longitud', '')
                setCurrIndex(-1)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const handleSelect = (e) => {
        const index = e.target.value
        setCurrIndex(index)
        setValue('latitud', dispCiudades[index].latitude)
        setValue('longitud', dispCiudades[index].longitude)
    }


    return (
        <div className="mt-5 col-6 mx-auto card p-3 shadow-lg">
            <h1 className="text-center">Crea tu ubicacion!!!</h1>
            <form action="" onSubmit={handleSubmit(onSubmitForm)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre de ciudad</label>
                    <br />
                    <i className="text-secondary">Ej. Fraile Pintado</i>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el nombre de la ciudad"
                        id="nombre"
                        {...register("nombre", { required: 'El nombre es requerido' })}
                        onChange={handleSearch}
                    />
                    <div className="alert-danger">{errors.nombre?.message}</div>
                </div>
                <div className="mb-3 d-flex">
                    <div className="col-5">
                        <label className="form-label">Latitud</label>
                        <input
                            type="number"
                            className="form-control"
                            step='any'
                            {...register("latitud", { required: 'La latitud es requerida' })}
                        />
                        <div className="alert-danger">{errors.latitud?.message}</div>
                    </div>
                    <div className="col-5 ms-auto">
                        <label className="form-label" >Longitud</label>
                        <input
                            type="number"
                            className="form-control"
                            step='any'
                            {...register("longitud", { required: 'La longitud es requerida' })}
                        />
                        <div className="alert-danger">{errors.longitud?.message}</div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Posibles ciudades</label>
                    <select className="form-select" onChange={handleSelect}>

                        {
                            dispCiudades ?
                                (
                                    dispCiudades.map((ciudad, index) => (
                                        <option key={index} value={index}>
                                            {ciudad.name}, {ciudad.country}, {ciudad.latitude}, {ciudad.longitude}
                                        </option>
                                    ))
                                ) :
                                (
                                    <option value="-1">Ninguna ciudad disponible</option>
                                )
                        }
                    </select>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <button className="btn btn-primary" type="submit">Crear</button>
                </div>
            </form>
        </div>
    )
}
