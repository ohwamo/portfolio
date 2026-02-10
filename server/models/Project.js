import mongoose from "mongoose"

const projectSchema = mongoose.Schema(
    {
        title : {type : String},
        discrption : {type : String},
        image : {type : String},
        github : String,
        live : String
    },
    {
        timestamps : true
    }
)

export default mongoose.model("Project", projectSchema)