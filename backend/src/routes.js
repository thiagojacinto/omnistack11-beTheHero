const express = require('express');

const routes = express.Router();

// all the routes here

routes.get('/', (req, res) => {
  // return res.send("Hello, we're starting Omnistack #11");  // plain text response

  return res.json({   // JSON response
    event: 'Omnistack Week #11.0',
    author: 'Thiago Jacinto'
  });
});


// at the end, exports the routes:
module.exports = routes;