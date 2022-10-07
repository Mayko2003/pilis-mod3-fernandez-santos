import { getWeather } from "../api/weatherAPI"


export const getData = async () => {
    const ubis = []

    await getWeather(-24.19457, -65.29712).then((data) => {
        const nueva = {
            id: 1,
            name: "San Salvador de Jujuy",
            lat: -24.19457,
            lon: -65.29712,
            temp: data.current_weather.temperature,
            windspeed: data.current_weather.windspeed,
        }

        ubis.push(nueva)

    }).catch((error) => {
        console.log(error)
    })

    await getWeather(-24.7859, -65.41166).then((data) => {
        const nueva = {
            id: 2,
            name: "Ciudad de Salta",
            lat: -24.19457,
            lon: -65.29712,
            temp: data.current_weather.temperature,
            windspeed: data.current_weather.windspeed,
        }
        
        ubis.push(nueva)
    }).catch((error) => {
        console.log(error)
    })

    return ubis
}