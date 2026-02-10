import Project from "../models/Project.js"


export const getProject = async(req,res)=>{
    try{

    //  await Project.find()
    //     res.status(200).json({message:"project fetecd"})

    const project = await Project.find()
    
        res.status(200).json(project)
        // console.log(project)

    } catch (error){
        res.status(500).json({message:"db error"})
    }
}


// createProject

export const createProject = async (req, res) =>{
    try{
        await Project.create(req.body)

        res.status(201).json({message : "created"})
        
    } catch (error){
        console.log(error)
        res.status(500).json({message:"db error"})

    }
}