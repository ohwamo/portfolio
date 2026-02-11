import { useState } from "react";

import api from "../../api/api";

import { toast} from "react-hot-toast"
function Admin() {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
    github: "",
    live: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await api.post("/project/create", data);
    toast.success("Project added");
    } catch (err){
      toast.error("fialed")
    }
  };
  const uploadImage = async e => {
  const file = e.target.files[0]
  const formData = new FormData()
  formData.append("image", file)

  const res = await api.post("/upload", formData)
  setData({ ...data, image: res.data.url })
}


  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-gray-900 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Add New Project
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="My Portfolio"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              rows="3"
              className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Short project description..."
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={data.image}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://image.com/project.png"
            />
          </div>

          {/* GitHub */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              GitHub Link
            </label>
            <input
              type="text"
              name="github"
              value={data.github}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://github.com/username/repo"
            />
          </div>

          {/* Live */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Live Demo
            </label>
            <input
              type="text"
              name="live"
              value={data.live}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://myproject.com"
            />
          </div>
          {/* upload imags */}
            <div>
            <label className="block text-sm text-gray-400 mb-1">
              Images
            </label>
            <input
              type="file"
              name="file"
              value={data.github}
              onChange={uploadImage}
              className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="images"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 font-semibold text-white"
          >
            Save Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
