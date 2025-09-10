const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true }
}, {
  timestamps: true // https://mongoosejs.com/docs/timestamps.html
});

/**
 * const userSchema = new Schema({ name: String }, { timestamps: true });
const User = mongoose.model('User', userSchema);
 * let doc = await User.create({ name: 'test' });

console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); // 2022-02-26T16:37:48.244Z

note replace and replaceAll overwrite all non _id properties, including immutable properties including createdAt.
createdAt and updatedAt are updated by system, not user.  It can't be changed with doc.updatedAt = new Date(0), for example.
 */

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;