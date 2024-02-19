const path= require('path')
const express= require('express')
const ideadRouter= require('./routes/ideas')
const cors= require('cors')
require('dotenv').config();
const port = process.env.PORT || 5000

const connectDB= require('./config/db')
connectDB();


const App= express()


App.use(express.static(path.join(__dirname, 'public')))

// body parser middleware
App.use(express.json())
App.use(express.urlencoded({extended:false}))


App.use(
    cors({
    origin:['http://localhost:5000', 'http://localhost:3000','http://127.0.0.1:5500'],
    credentiala: true
}))
App.get('/', (req,res)=>{
    res.json({message:'Message to random ideas'})
})


App.use('/api/ideas', ideadRouter)
App.listen(port, ()=>console.log(`Server listening port ${port}`))