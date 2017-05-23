var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient;
var address = `mongodb://localhost:27017/0509`;

/* GET home page. */
router.post('/', function(req, resp, next) {
  console.log('注册页');

  mongoCt.connect(address,(err,db)=>{
    if (err) throw err;
    let user = db.collection('user');
    user.find({},(error,data)=>{
      if(error) throw error;
      data.toArray((error,data)=>{
        if(error) throw error;
        data.map((val)=>{
          if(req.body.usn == val.username){
            resp.send('用户名已存在');
          }else{
            user.insertOne({
              'nickname':req.body.nick,
              'username':req.body.usn,
              'password':req.body.psd
            },(error,data)=>{
              if(error) throw error;
              //resp.redirect('/login');
              resp.send('注册成功');
            })
          }
        })
      })
    })
  });

});

module.exports = router;
