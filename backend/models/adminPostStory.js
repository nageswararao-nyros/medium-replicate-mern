var mongoose = require('mongoose');

var stories = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    story: { type: String },
    status:{type:Boolean},
    category:{type:String},
    likes:{type:Number}
    
    }, {
    timestamps: true
});

module.exports = mongoose.model('story', stories);