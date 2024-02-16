const mongoose= require('mongoose')

const ideaSchema= new  mongoose.Schema({
   text:
   {type: String,
     required: [true, 'Please add text field'] },

    tag: {type: String,
      required: true},

    username:{
        type: String
    },

    date:{
        type: Date,
        default:Date.now()
      }
})


module.exports= mongoose.model('Idea', ideaSchema)









module.exports= mongoose.model('Idea',ideaSchema)