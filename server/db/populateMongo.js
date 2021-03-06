// To use this, first install via npm: npm i node-fetch --save
//  Then: node .\db\bulkSubmit.js
// import APIservice from '@/services/APIService.js'

//1690 is the last page

const fetch = require("node-fetch");
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

let completeLaunchData = [];

fetch('https://launchlibrary.net/1.4/launch/1960-01-01/2019-01-01?limit=100000')
.then(res => res.json())
  .then(res =>completeLaunchData = res.launches)
  .then((res)=>{
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;

      // Turn the dates into js objects
      completeLaunchData = completeLaunchData.map((l) => {
        const jsDate = new Date(l.net);
        const newLaunch = l;
        newLaunch.jsDate = jsDate;
        return newLaunch;
      });

      const dbo = db.db("launches");
      dbo.collection('launch_items').drop();
      dbo.collection("launch_items").insertMany(completeLaunchData, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
      })
    })
  })
  .catch(err => console.log(err));
