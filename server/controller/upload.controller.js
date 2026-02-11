import cloudinary from "../config/cloudinary.js"

export const uploadImg = async (req, res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        return res.status(201).json({ url: result.secure_url})

    } catch (err){
       return res.status(500).json({message:"fail"})
    }
}