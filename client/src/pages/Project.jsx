import{ useState, useEffect } from "react"
import api from "../api/api"


function Project (){
    const [projects, setProject] =useState([])
    useEffect(()=>{
        api.get("/project")
            .then(res => setProject(res.data))
            .catch(err => console.error(err))
        // setProject()

    },[])
    return(
        <div>
            <h4>my Projects</h4>
            <div>
               {projects.map((p)=>(
                <div key={p._id}>
                <h1>{p.title}</h1>
                <h1>{p.github}</h1>
                <h1>{p.live}</h1>
                <img src={p.image} />
                <p>{p.discrption}</p>  
                </div>
               ))}
            </div>
        </div>
    )
}

export default Project
