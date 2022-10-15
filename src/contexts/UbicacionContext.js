import { createContext, useState } from "react";

export const UbicacionContext = createContext({
    ubicaciones: null,
    setUbicaciones: () => {},
});

export const UbicacionProvider = ({children}) => {
    
    const [ubicaciones, setUbicaciones] = useState(null);

    return (
        <UbicacionContext.Provider value={{ubicaciones, setUbicaciones}}>
            {children}
        </UbicacionContext.Provider>
    )
}