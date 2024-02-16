const express= require('express')
const port =5000;

const App= express()

const ideas= [
    {
        id:1,
        text:" Positive Newspaper, anewsletter that only shares positive, uplifting news",
        tag: 'technology',
        username:'Lydiamule',
        date:'2024-15-01'

    },
    {
        id:2,
        text:" Positive Newspaper, anewsletter that only shares positive, uplifting news",
        tag: 'technology',
        username:'Lydiamule',
        date:'2024-15-01'

    },
    {
        id:3,
        text:" Positive Newspaper, anewsletter that only shares positive, uplifting news",
        tag: 'technology',
        username:'Lydiamule',
        date:'2024-15-01'

    },
]

App.get('/', (req,res)=>{
    res.json({message:'Message to random ideas'})
})


App.get('/api/ideas', (req,res)=>{
    res.json({message:'hello world!', data: ideas, success:true})
})
App.get('/api/ideas/:id', (req,res)=>{
    const idea= ideas.find((idea)=>idea.id=== +req.params.id)

    if(!idea){
       return res.status(404).json({success: true, message:'Resource not found'})
    }
    res.json({message:'hello world!', data: idea})
})

App.listen(port, ()=>console.log(`Server listening port ${port}`))