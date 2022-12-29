const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB);

const picture = new mongoose.Schema({
    name: String,
    place: String,
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Picture', picture);

