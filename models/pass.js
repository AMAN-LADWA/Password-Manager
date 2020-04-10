
const mongoose = require('mongoose');
const config = require('../config/database');

const PassSchema = mongoose.Schema({
    thekey: {
      type: String
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    }
  });

  const Pass = module.exports = mongoose.model('Pass', PassSchema);


  module.exports.getUserById = function(id, callback){
    Pass.findById(id, callback);
  }

  module.exports.addPass = function(newPass, callback){
        newPass.save(callback);
      }

  module.exports.getPasses = function(tkey){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

/*     MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("meanauth");
      var query = { address: tkey };
      var ret;
      dbo.collection("passes").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        ret = result;
        db.close();
      });
      return ret;
    }); */
}