const Note = require('../models/note-model');

async function seedNotes(req, res, next) {
  try {
    await Note.deleteMany({});
    await Note.create(
      {
        title: 'Title 1',
        content: 'Content for Title 1'
      },
      {
        title: 'Title 2',
        content: 'Content for Title 2'
      },
      {
        title: 'Title 3',
        content: 'Content for Title 3'
      }
    );
    res.status(201).redirect('/api/notes');
  } catch(error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function getNotes(req, res, next) {
  try {

  } catch(error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function deleteNote(req, res, next) {
  try {

  } catch(error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function updateNote(req, res, next) {
  try {

  } catch(error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function createNote(req, res, next) {
  try {

  } catch(error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

async function getNote(req, res, next) {
  try {

  } catch(error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  seedNotes,
  getNotes,
  deleteNote,
  updateNote,
  createNote,
  getNote
};