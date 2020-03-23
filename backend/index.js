// imports express lib:
const express = require('express');
// than, initiate it:
const app = express();

app.get('/', (req, res) => {
  // return res.send("Hello, we're starting Omnistack #11");  // plain text response

  return res.json({   // JSON response
    event: 'Omnistack Week #11.0',
    author: 'Thiago Jacinto'
  });
});

app.listen(3333);