const express = require('express');
const fs = require('fs');
const path = require('path');
const id = require('uuid');


const api = require('./routes/index');

// Sets port to required value for Heroku, or 3001
const PORT = process.env.PORT || 3001;

// Creates a new instance of Express
const app = express();

// Express middleware to handle json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', api);

// No dir specified sends to index.html
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

// Unspecified dirs send to index.html
app.get('*', (req, res) => 
res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

// GET route to notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
);

// Express goes live, listening at specified port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);