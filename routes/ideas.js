const express= require('express')
const router= express.Router()

const ideas= [
    {
        id:1,
        text:" Positive Newspaper, anewsletter that only shares positive, uplifting news",
        tag: 'technology',
        username:'Lydiamule',
        date:'2024-01-15'

    },
    {
        id:2,
        text:" Positive Newspaper, anewsletter that only shares positive, uplifting news",
        tag: 'technology',
        username:'Lydiamule',
        date:'2024-01-15'

    },
    {
        id:3,
        text:" Positive Newspaper, anewsletter that only shares positive, uplifting news",
        tag: 'technology',
        username:'Lydiamule',
        date:'2024-01-15'

    },
]

router.get('/', (req,res)=>{
    res.json({message:'hello world!', data: ideas, success:true})
})
router.get('/:id', (req,res)=>{
    const idea= ideas.find((idea)=>idea.id=== +req.params.id)

    if(!idea){
       return res.status(404).json({success: true, message:'Resource not found'})
    }
    res.json({message:'hello world!', data: idea})
})


// add idea

router.post('/', (req,res)=>{ const idea= {
    id: ideas.length+1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date( ).toISOString().slice(0,10)

}

    ideas.push(idea) 
     res.json({success: true, data:idea})  
})

router.delete('/:id', (req,res)=>{
    const idea= ideas.find((idea)=>idea.id=== +req.params.id)
    if(idea){
        const index= ideas.indexOf(idea)
        ideas.splice(index,1)

        // ideas.pop(idea)
        res.json({success:true, message:`id ${idea.id} is deleted`, data:idea})
    }
    else{
        res.status(404)
        .json({success:false, message:"The resource you are trying to delete does not exist"})
    }
})

router.put('/:id', (req,res)=>{
    const idea= ideas.find((idea)=>idea.id=== +req.params.id)

    if(!idea){
       return res.status(404).json({success: true, Error:'Resource not found'})
    }

    idea.text=req.body.text|| idea.text
    idea.tag=req.body.tag|| idea.tag
    
    res.json({message:'hello world!', data: idea})
})



module.exports= router