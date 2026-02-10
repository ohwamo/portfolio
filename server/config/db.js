import mongoose from "mongoose"

// create database connction
const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB)
        console.log("DB Conncet")
    } catch (error) {
        console.log("DB fail")
        process.exit(1)
    }
}

export default connectDb