var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient;
var address = `mongodb://localhost:27017/0509`;

/* GET home page. */
router.get('/', function(req, res, next) {
  

  mongoCt.connect(address,(err,db)=>{
    if (err) throw err;
    let article = db.collection('follow');
    article.find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
        
      });
  });

});

module.exports = router;


/*
http.get('豆瓣...',(err,data)=>{
  data -> inert ->mysql|mongod ->
});
*/
