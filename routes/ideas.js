const express= require('express')
const router= express.Router()
const Idea = require('../models/idea')

router.get('/', async (req,res)=>{
    try {
        const ideas= await Idea.find()
        res.json({message:'success', data:ideas})
    } catch (error) {
        res.status(500).json({success: false, error: "Something went wrong"});
    }
})
router.get('/:id', async (req,res)=>{
   
   try {
    const idea= await Idea.findById(req.params.id)
    res.json({success:true, data: idea})
   } catch (error) {
        res.status(404).json( { success:false, message: "Resource not found" })
   } 
})


// add idea

router.post('/',async (req,res)=>{ const idea= new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
})

try {
    const savedIdea=await idea.save()
    return res.send({success:true, data: savedIdea})
} catch (error) {
    console.log(error);
    res.status(500).json({success:false, error: error})
}

     res.json({success: true, data:idea})  
})

router.delete('/:id', async(req,res)=>{

    try { 
        const idea= await Idea.findByIdAndDelete(req.params.id)
        return res.json( {success: true, message:`Idea with id: ${idea._id} is Deleted!`, data: idea})
    } catch (error) {
        res.status(404).json({success:false, error:'Resource not found'})
    }
    // if(idea){
    //     const index= ideas.indexOf(idea)
    //     ideas.splice(index,1)

    //     // ideas.pop(idea)
    //     res.json({success:true, message:`id ${idea.id} is deleted`, data:idea})
    // }
    // else{
    //     res.status(404)
    //     .json({success:false, message:"The resource you are trying to delete does not exist"})
    // }
})

router.put('/:id', async(req,res)=>{
   
   try {
    const updatedIdea= await Idea.findByIdAndUpdate(req.params.id,{
              
        $set:{
            text: req.body.text,
            tag: req.body.tag
        }  
    })
        res.json({success:true, data: updatedIdea})

   } catch (error) {
    return res.status(404).json({success: true, Error:'Resource not found'})
} 
})



module.exports= router