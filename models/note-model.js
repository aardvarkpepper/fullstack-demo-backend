const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true }
}, {
  timestamps: true
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;