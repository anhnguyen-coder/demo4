const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    genre: String,
    author: String,
    quantity: Number,
    price: Number,
    date: Date,
    cover: String,
    video: String

})

const BookModel = mongoose.model('Sach', BookSchema,'book')//book: ten cua collection
module.exports =   BookModel;