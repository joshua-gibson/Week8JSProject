const express = require('express');
const { ObjectID } = require('mongodb');
const fetch = require('node-fetch');

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/:startDate/:endDate', (req, res) => {
    const baseURL = `https://launchlibrary.net/1.4/launch`
    const limit = 1000;
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
    const apiURL = `${baseURL}/${startDate}/${endDate}?limit=${limit}`

    /*
    fetch(apiURL)
      .then(apiRes => apiRes.json())
      .then(json => res.json(json));
    */

    .find({
      isonet: {
        $gte: ISODate(startDate),
        $lte: ISODate(endDate)
      }
    })
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
    */

  });

  return router;

};

module.exports = createRouter;
