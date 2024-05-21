import { useState, useEffect, createContext, useContext } from "react";

const GlobalContext = createContext()
export const useGlobalContext = ()=>useContext(GlobalContext)

const GlobalProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    return (
        <GlobalContext.Provider
        value={{isLoading,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider