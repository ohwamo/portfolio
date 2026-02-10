import { useState } from "react"
import api from "../../api/api"
import { toast } from "react-hot-toast"

export default function Admin() {
    const [data, setData] =useState({
        title:"",
        discrption:"",
        image:"",
        live:"",
        github:""
    })
 
    // handleSubmit

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await api.post("/project", data),
        toast.success("project added")
    }
// handlechange
const handleChange = (e)=>{
    setData({...data, [e.target.name] :e.target.value})
}
  return (
    <div className="text-black bg-gray-500">
        <h2 className="text-3xl">add project</h2>
        <form onSubmit={handleSubmit}> 
            <input
                placeholder="title"
                onChange={handleChange}
            />
            <input 
                placeholder="discrption"
                onChange={handleChange}


            />
            <input 
                placeholder="image url"
                onChange={handleChange}
                
                />
            <input
                placeholder="github"
                onChange={handleChange}

            />
            <input 
                placeholder="deployment"
                onChange={handleChange}

            />
            <button className="bg-blue-700 rounded-full px-4 py-3">save</button>
        </form>
      
    </div>
  )
}
