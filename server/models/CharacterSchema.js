//create model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance
let CharacterSchema = new Schema(
    {
        "characterName":String,
        "characterGender": String,
        "characterAge":Number
    }
)

//export model
module.exports = mongoose.model('characters200416', CharacterSchema);