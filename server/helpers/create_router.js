const express = require('express');
const { ObjectID } = require('mongodb');
const fetch = require('node-fetch');

const staticDateCutoff = new Date('2019-01-01');

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/:startDate/:endDate', (req, res) => {
    const baseURL = `https://launchlibrary.net/1.4/launch`
    const limit = 1000;
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
    const apiURL = `${baseURL}/${startDate}/${endDate}?limit=${limit}`
    const startJSDate = new Date(startDate);
    const endJSDate = new Date(endDate);
    
    if (endJSDate > staticDateCutoff) {
      // Requested dates are after cutoff - find from API
      fetch(apiURL)
        .then(apiRes => apiRes.json())
        .then(json => res.json(json.launches));
    } else {
      // Requested dates are before historical cutoff - find in DB
      collection
      .find({
        jsDate: {
          $gt: startJSDate,
          $lt: endJSDate
        }
      })
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    }
  });
  return router;
};

module.exports = createRouter;
