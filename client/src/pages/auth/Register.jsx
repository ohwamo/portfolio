import { useState } from "react"
import {toast } from "react-hot-toast"
import api from "../../api/api"


function Register (){
    const [register, setregister] =useState({
        email :"",
        password : ""
    })

   
   const handleChange =(e) =>{
    setregister({...register,[e.target.name]: e.target.value})
   };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
        await api.post("/auth/register", register)
        toast.success("registerd")
        } catch (err){
            toast.error("invalid")
        }
    };

    return (
        <div className="min-h-screen">
            <div>
                <form onSubmit={handleSubmit}>
                <input 
                    placeholder="email"

                    name="email"
                    value={register.email}
                    onChange={handleChange}
                />
                <input 
                    placeholder="password"
                    name="password"
                    value={register.password}
                    onChange={handleChange}

                
                />



                <button type="submit">SignUp</button>
            </form>
            </div>
        </div>
    )
}

export default Register