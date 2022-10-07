import { createContext, useState } from "react";

export const UbicacionContext = createContext({
    ubicaciones: [],
    setUbicaciones: () => {},
});

export const UbicacionProvider = ({children}) => {
    
    const [ubicaciones, setUbicaciones] = useState([]);

    return (
        <UbicacionContext.Provider value={{ubicaciones, setUbicaciones}}>
            {children}
        </UbicacionContext.Provider>
    )
}