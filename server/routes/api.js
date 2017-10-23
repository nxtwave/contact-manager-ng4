const express = require('express');
const router = express.Router();

const Dataservice = require('../lib/dataservice');

/**
 * Get list of contacts
 */
router.get('/contacts', function(req, res) {
  Dataservice.list().then(function(result) {
    res.json(result);
  }).catch(function(err) {
    res.send(err);
  });
});

module.exports = router;
