let express = require('express')
let fs = require('fs');
let cors = require('cors');
let app = express();
let port = process.env.PORT || 3000;


app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/vote', function(req, res) {
  let image = parseInt(req.query.image);
  let result = parseInt(req.query.result);
  console.log('A user voted', result, 'for', image);
  fs.appendFileSync('results.csv', Date.now() + ',' + image + ',' + result + ',' + '\n');
  res.send('OK');
});

app.listen(port, function() {
  console.log('Example app listening on port ' + port);
});
