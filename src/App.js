
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getWeather } from "./api/weatherAPI";
import { UbicacionContext } from "./contexts/UbicacionContext";
import { Navigation } from "./routes/Navigation/Navigation";


function App() {

    const { ubicaciones, setUbicaciones } = useContext(UbicacionContext)

    useEffect(() => {

        getWeather(-24.19457, -65.29712).then((data) => {
            const nueva = {
                name: "San Salvador de Jujuy",
                lat: -24.19457,
                lon: -65.29712,
                temp: data.current_weather.temperature,
                windspeed: data.current_weather.wind_speed,
            }
            setUbicaciones([...ubicaciones, nueva])
        }).catch((error) => {
            console.log(error)
        })

        getWeather(-24.7859, -65.41166).then((data) => {
            const nueva = {
                name: "Salta",
                lat: -24.19457,
                lon: -65.29712,
                temp: data.current_weather.temperature,
                windspeed: data.current_weather.wind_speed,
            }
            setUbicaciones([...ubicaciones, nueva])
        }).catch((error) => {
            console.log(error)
        })

        return () => {

        }
    }, [ ubicaciones, setUbicaciones ])


    return (
        <div >
            <Routes>
                <Route path='/' element={<Navigation/>}>
                    
                </Route>
            </Routes>
        </div>
    );
}

export default App;
