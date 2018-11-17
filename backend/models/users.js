var mongoose = require('mongoose');

var users = new mongoose.Schema({
    name: { type: String },
    password: { type: String },
    type: { type: Boolean }
    
    }, {
    timestamps: true
});

module.exports = mongoose.model('user', users);