import Admin from "../models/Admin.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const login = async (req,res)=>{
    try{
        const { email, password }= req.body;
        const admin = await Admin.findOne({ email })
        if(!admin) res.status(401).json({message: "invalid"})
        const match = await bcrypt.compare(password, admin.password)
    if(!match) res.status(401).json({message: "invalid"})

        const token = jwt.sign({id: admin._id}, process.env.JWT_SECRET, {expiresIn: "1d"})
res.status(200).json({
    message : "login successfully",
    token
})
    } catch (err){
        res.status(500).json({message:"db fail"})
    }
}

export const register = async(req, res) =>{
    try {
        const { email , password } = req.body;
        const hash = await bcrypt.hash(password, "10")
        const admin = await Admin.create({email, password: hash})
        res.status(201).json({message: "registerd success"})
        admin
    } catch (err){
        res.status(500).json({message:"db fail"})

    }
}