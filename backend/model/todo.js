const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const todoSchema = new Schema ({
    todo :{
        type: String,
        required : true
    },
    when : {
        type: String,
        required : true
    }
}, { timestamps: true });

todoSchema.pre('save',function(){
    this.when = new Date(this.when)
})

module.exports = mongoose.model('Todo',todoSchema)