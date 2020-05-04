const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Pass = require('../models/pass');


router.get('/pass',(req,res,next)=>{
  res.json({
    Pass:res.pass
    
  });
  /* 
  var ret=Pass.getPasses(req);
  res.json(ret); */
});
  
  router.post('/pass',(req,res,next)=>{ 
    let newpass = new Pass({
      thekey:req.body.sid,
      title:req.body.title,
      content:req.body.content
    });
    Pass.addPass(newpass);
  });
  
  module.exports = router;
  