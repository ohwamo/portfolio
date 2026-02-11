import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { toast } from "react-hot-toast"


function Login (){
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const [form, setform] = useState({
        email :"",
        password : ""
    })

   
   const handleChange =(e) =>{
    setform({ ...form, [e.target.name]: e.target.value })
   };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
        await login(form)

        navigate("/admin")
        toast.success("login in")


        } catch (err){
            toast.error("invalid")
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
                <form onSubmit={handleSubmit} className="bg-gray-800  rounded-lg w-80 p-8">
                    <h1 className="text-white text-2xl mb-4 text-center">Admin Login</h1>
                <input 
                    className="w-full p-2 mb-3"
                    placeholder="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input 
                    placeholder="password"
                    className="w-full p-2 mb-4"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <button type="submit" className="bg-blue-600 rounded w-full p-2 ">Login</button>
            </form>
        </div>
    )
}

export default Login