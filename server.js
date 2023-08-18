const express = require('express');
const fs = require('fs');
const path = require('path');
const id = require('uuid');


const api = require('./routes/index');

// Sets port to required value for Heroku, or 3001
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', api);

app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

app.get('*', (req, res) => 
res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);