import { getWeather } from "../api/weatherAPI";

const cities = []

getWeather(-24.19457,-65.29712).then((data) => {
    cities.push({
        name: "San Salvador de Jujuy",
        lat: -24.19457,
        lon: -65.29712,
        temp: data.current_weather.temperature,
        windspeed: data.current_weather.wind_speed,
    })
}).catch((error) => {
    console.log(error)
})

export {cities}