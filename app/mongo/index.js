module.exports.findDocuments = function findDocuments(db, callback) {
    const collection = db.collection('books');
    
    collection.find({'a': 3}).toArray(function(err, docs) {
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });
}

module.exports.insertDocuments = function insertDocuments(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
}