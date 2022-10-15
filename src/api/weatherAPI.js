const SERVER_DOMAIN = "https://api.open-meteo.com/v1/forecast?current_weather=true"
const SERVER_DOMAIN2 = "https://geocoding-api.open-meteo.com/v1/search?language=es"

export const getWeather = async (latitud,longitud) => {
    try{
        const response = await fetch(`${SERVER_DOMAIN}&latitude=${latitud}&longitude=${longitud}&timezone=America/Argentina/Jujuy`)
        return response.json()
    }
    catch(error){
        console.log(error)
    }
}

export const getCity = async (nombre) => {
    try{
        const response = await fetch(`${SERVER_DOMAIN2}&name=${nombre}&count=20`)
        return response.json()
    }
    catch(error){
        console.log(error)
    }
}



