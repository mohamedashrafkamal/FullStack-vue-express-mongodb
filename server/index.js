const express = require('express');
const bosyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bosyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts',posts);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));