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
        const idea= await Idea.findById(req.params.id)

        if(idea.username===req.body.username){
            await Idea.findByIdAndDelete(req.params.id)
            return res.json( {success: true, message:`Idea with id: ${idea._id} is Deleted!`, data: {}})
               }
               res.status(403).json({success:false, error:'You are not authorized to delete this resource'})
   
    } catch (error) {
        res.status(500).json({success:false, error:'Something went wrong'})
    }
})

router.put('/:id', async(req,res)=>{
   
   try {
    const idea= await Idea.findById(req.params.id)
    if(idea.username===req.body.username){
        const updatedIdea= await Idea.findByIdAndUpdate(req.params.id,{
              
        $set:{
            text: req.body.text,
            tag: req.body.tag
        }  
    })
      return  res.json({success:true, data: updatedIdea})

    }
    res.status(403).json({success:false, error:'You are not authorized to update this resource'})

   } catch (error) {
    return res.status(404).json({success: true, Error:'Resource not found'})
} 
})



module.exports= router