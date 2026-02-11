import cloudinary from "cloudinary"

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_secret : process.env.CLOUD_SECRET,
    api_key : process.env.CLOUD_API
})
export default cloudinary