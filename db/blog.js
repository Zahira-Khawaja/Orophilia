const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB);

const blog = new mongoose.Schema({
    name:String,
    content:String
});

module.exports = mongoose.model('Blog',blog);

