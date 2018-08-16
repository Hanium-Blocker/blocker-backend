const router = require('express').Router();

const conn = require('../models/mysql');
const config = require('../config/config');

router.get('/election', (req, res) => {
  const sql = 'SELECT * FROM elections';
  conn.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(config.status.sc500);
    } else {
      console.log('Response All Election !');
      res.json(results);
    }
  });
});

module.exports = router;
