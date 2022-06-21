//exporting schema for book
const mongoose = require('mongoose');

// Child documents or subdocuments can be embedded into a parent document
// The bookSchema defines the schema of the subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
