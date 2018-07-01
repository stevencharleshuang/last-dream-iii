const express = require('express');
const app = express();

const logger = require('morgan');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public')));
app.use(logger('dev'));


app.listen(PORT, () => {
  console.log(`Server up and listening on port: ${PORT}`)
})
