const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//----------------- pathfinder ----------
const pathfinder = require('./pathfinder')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/pathfinder/report', function (req, res, next) {
  console.log('test')
  pathfinder.report(function(response){
    res.json(response)
  })
});

var server = app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
});
server.timeout = 1000 * 60 * 2;


