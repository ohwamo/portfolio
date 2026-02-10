
import { useEffect, useState } from "react"
import api from "../api/api"

export default function Project() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get("/project")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl mb-6">My Projects</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p._id} className="bg-gray-800 p-4 rounded-lg">
            <img src={p.image} className="h-40 w-full object-cover rounded" />
            <h2 className="mt-2 text-xl">{p.title}</h2>
            <p className="text-gray-400">{p.description}</p>

            <div className="flex gap-4 mt-4">
              <a href={p.github} target="_blank" className="text-blue-400">GitHub</a>
              <a href={p.live} target="_blank" className="text-green-400">Live</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
