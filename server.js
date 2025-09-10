require('dotenv').config();
require('./config/db-connection'); // presumably, 'require' invokes the file, which has mongoose.connection.once.  Presumably mongoose.connect repeatedly tries on failure.
/**
 * Also note:  add try/catch to handle:
 * There are two classes of errors that can occur with a Mongoose connection.

Error on initial connection: If initial connection fails, Mongoose will emit an 'error' event and the promise mongoose.connect() returns will reject. However, Mongoose will not automatically try to reconnect.
Error after initial connection was established: Mongoose will attempt to reconnect, and it will emit an 'error' event.
 */
// Remember, if running MongoDB locally, https://mongoosejs.com/docs/connections.html
const express = require('express');
const cors = require('cors');
const noteRouter = require('./routes/notes-router');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // fix up specifics
app.use('/api/notes', noteRouter);

app.listen(PORT, () => {
  console.log(`Server is listening @ http://localhost:${PORT}`);
});