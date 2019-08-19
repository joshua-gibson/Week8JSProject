// To use this, first install via npm: npm i node-fetch --save
//  Then: node .\db\bulkSubmit.js
// import APIservice from '@/services/APIService.js'

//1690 is the last page

const fetch = require("node-fetch");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



let cohort = [];
let getCohort=function(num){fetch(`https://launchlibrary.net/1.4/launch?sort=%27ascending%27&offset=${num}0`)
  .then(res=>res.json())
  .then(res=> cohort = res)
  .then(cohort=> {

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("launches").insertMany(cohort.launches, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
      })
    })



  })
};

let i=0;
for (i = 0; i < 170; i++) {
  getCohort(i);
}
