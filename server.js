const express             = require('express');
const app                 = express();
const path                = require('path');
const http                = require('http');
const server              = http.createServer(app);
const socketIO            = require('socket.io');
const io                  = socketIO(server);
const PORT                = process.env.PORT || 3000;

const logger    = require('morgan');

app.use(express.static(path.join(__dirname, './public')));
app.use(logger('dev'));



server.listen(PORT, () => {
  console.log(`Server up and listening on port: ${PORT}`)
})
