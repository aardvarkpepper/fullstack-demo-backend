const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notes-controller');
// switch up later to break up routes as necessary, see notes

router.get('/seed', noteController.seedNotes);
router.get('/', noteController.getNotes);
router.delete('/:id', noteController.deleteNote);
router.put('/:id', noteController.updateNote);
router.post('/', noteController.createNote);
router.get('/:id', noteController.getNote);

module.exports = router;