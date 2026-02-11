import { createContext , useState } from "react"
import api  from "../api/api"

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [token, setToken]=useState(localStorage.getItem("token"))

    const login = async (data)=>{
        const res = await api.post("/auth/login", data)
        localStorage.setItem("token", res.data.token)
        setToken(res.data.token)
    }
    return(
        <AuthContext.Provider value={{  token, login}} > 
            { children }
        </AuthContext.Provider>
    )
}