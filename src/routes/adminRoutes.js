var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function () {

adminRouter.route('/addBooks')
             .get(function(req,res){
             var url = 'mongodb://localhost:27017/ctrllib';
    mongodb.connect(url, function(error, db){
      var collection = db.collection('books');
      collection.insertMany(books, function(error, results){
        res.send(results);
        db.close();
      });
    });
    console.log('inserting books');
  });
  return adminRouter;
};

module.exports = router;
