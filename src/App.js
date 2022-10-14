
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getWeather } from "./api/weatherAPI";
import { UbicacionContext } from "./contexts/UbicacionContext";
import { Home } from "./routes/home/Home";
import { Navigation } from "./routes/Navigation/Navigation";
import { Footer } from "./routes/Footer/Footer";
import { CreateCard } from "./routes/ubicacion/CreateCard";
import { getData } from "./helpers/getDefaultData";

function App() {

    const { setUbicaciones } = useContext(UbicacionContext)

    useEffect(() => {

        getData().then((data) => {
            setUbicaciones(data)
        }).catch((error) => {
            console.log(error)
        })



    }, [setUbicaciones])


    return (
        <div id="body">
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="ubicacion/create" element={<CreateCard />} />
                    
                </Route>
                
            </Routes>
            <Footer />
        </div>
    );
}

export default App;