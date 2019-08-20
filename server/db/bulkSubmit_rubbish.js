// To use this, first install via npm: npm i node-fetch --save
//  Then: node .\db\bulkSubmit.js
// import APIservice from '@/services/APIService.js'

//1690 is the last page

const fetch = require("node-fetch");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
let completeLaunchData = [];


// let cohortIDs = [];
// let getCohort=function(num){fetch(`https://launchlibrary.net/1.4/launch?sort=%27ascending%27&offset=${num}0`)
//   .then(res=>res.json())
//   .then(res=>res.launches.map(x => x.id))
//   .then(res=>cohortIDs.push(res))
//   };

urls = [];
for (i = 0; i < 1; i++) {
  urls.push(`https://launchlibrary.net/1.4/launch?sort=%27ascending%27&offset=${i}0`);
}

const promises = urls.map(url => fetch(url));
Promise.all(promises)
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(cohorts => {
    const mappedCohorts = cohorts.map((cohort) => {
      return cohort.launches.map((launch) => {
        const url = `https://launchlibrary.net/1.4/launch/${launch.id}`;
        return fetch(url);
      })
    })
    return mappedCohorts.flat();
  })
  .then((promises) => {
    return Promise.all(promises);
  })
  .then((responses) => {
    console.log(responses.PassThrough);
    return responses.map((res) => {
      return res.json();
    })
    .then(data => {
      completeLaunchData.push(data);
    })
     .then(launch => {
       console.log(completeLaunchData);
   })

  })

  .catch(err => console.log(err));



//
// Promise.all([promise_169])
// .then(res => console.log(cohortIDs));


//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("launches").insertMany(cohort.launches, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   })
// })
