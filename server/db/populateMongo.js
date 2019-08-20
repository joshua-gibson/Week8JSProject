// To use this, first install via npm: npm i node-fetch --save
//  Then: node .\db\bulkSubmit.js
// import APIservice from '@/services/APIService.js'

//1690 is the last page

const fetch = require("node-fetch");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

let completeLaunchData = [];

fetch('https://launchlibrary.net/1.4/launch/1960-01-01/2019-01-01?limit=100000')
.then(res => res.json())
  .then(res =>completeLaunchData = res.launches)
  .then((res)=>{
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("launches");
      dbo.collection("launch_items").insertMany(completeLaunchData, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
      })
    })
  })

  .catch(err => console.log(err));
