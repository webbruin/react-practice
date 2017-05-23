var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient;
var address = `mongodb://localhost:27017/0509`;

/* GET home page. */
router.post('/', function(req, resp, next) {
  console.log('登录页');

  mongoCt.connect(address,(err,db)=>{
    if (err) throw err;
    let user = db.collection('user');
    user.find({},(error,data)=>{
      if(error) throw error;
      data.toArray((error,data)=>{
        if(error) throw error;
        data.map((val)=>{
          if(req.body.psd == val.password){
            resp.send('登录成功');
          }else if(req.body.usn != val.username){
            resp.send('用户不存在');
          }else{
            resp.send('账号或密码错误');
          }
        })
      })
    })
  });

  /*mongoCt.connect(address,(err,db)=>{
    if(err) throw err;
    let user = db.collection('user');
    user.find({},(error,data)=>{
      if(error) throw error;
      data.toArray((error,result)=>{
        if(error){
          res.send('用户不存在')
        };
        data.map((val,index)=>{
          if(req.body.usn != val.username || req.body.psd != val.password){
            res.send('用户名或密码错误');
          }else{
            res.send('登录成功');
          }
        })
      })
    })
  })*/

});

module.exports = router;
