const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blog = new Schema({
email:{type: String, required: true},
blogname: {type: String, required: true},
description: {type: String, required: true},
date: {type: String, required: true},
 
}, {
timestamps: true
});
const blogs = mongoose.model('blog', blog);
module.exports = blogs;