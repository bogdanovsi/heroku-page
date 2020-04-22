const express = require('express')
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('hello itmo');
})

app.get('/crypto-lab', function(request, response) {
  response.sendFile(path.join(__dirname, 'labs', 'crypto', 'answer'))
})

app.get('e2e-001.js', function(request, response) {
  response.sendFile(path.join(__dirname, '/e2e-001.js'))
})

app.get('/e2e-001_', function(request, response) {
  response.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
