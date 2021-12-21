const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id : Number,
    username : String,
    bio : String,
    url : String,
    repos_no : Number,
    repos_url : String
});

const User = mongoose.model('User', userSchema);

module.exports = User;

