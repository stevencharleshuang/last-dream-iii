const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`Server up and listening on port: ${PORT}`)
})
