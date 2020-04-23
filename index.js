const express = require('express')
const path = require('path');
const app = express();

const { findDocuments } = require('./app/mongo');
const { findOneBook } = require('./app/mongo/mongoose');

const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'myproject';

const client = new MongoClient(url, { useUnifiedTopology: true });
var db = null;
client.connect(function(err) {
    db = client.db(dbName);
});

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/book/:name', function(request, response) {
  console.log(request.params.name);

  // findOneBook(request.params.name, (book) => {
  //   response.send(book);
  // })

  response.send(await findOneBook(request.params.name));
})

app.get('/')

app.get('/crypto-lab', function(request, response) {
  response.sendFile(path.join(__dirname, 'labs', 'crypto', 'answer'))
})

app.get('e2e-001.js', function(request, response) {
  response.sendFile(path.join(__dirname, '/e2e-001.js'))
})

app.get('/e2e-001_', function(request, response) {
  response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
