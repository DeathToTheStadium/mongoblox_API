const mongoose = require('mongoose')
const mongoSchema = mongoose.Schema

var GameSchema = new mongoSchema({
    playerKey:{type:String},
    data:{type:Object},
    dateCreated:{type:String}
})

module.exports = mongoose.model("LavaGame",GameSchema)