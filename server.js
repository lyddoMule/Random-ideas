const express= require('express')
const ideadRouter= require('./routes/ideas')
require('dotenv').config();
const port = process.env.PORT || 5000

const connectDB= require('./config/db')
connectDB();


const App= express()
// body parser middleware
App.use(express.json())
App.use(express.urlencoded({extended:false}))
App.get('/', (req,res)=>{
    res.json({message:'Message to random ideas'})
})


App.use('/api/ideas', ideadRouter)
App.listen(port, ()=>console.log(`Server listening port ${port}`))