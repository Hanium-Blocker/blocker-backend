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

router.post('/election', (req, res) => {
  const sql = 'SELECT COUNT(*) count FROM elections WHERE name=?';
  conn.query(sql, [req.body.name], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(config.status.sc500);
    } else if (results[0].count > 0) {
      console.log('Duplicate election !');
      res.status(200).json(config.status.sc409);
    } else {
      const result = {
        name: req.body.name,
      };
      const sql = 'INSERT INTO elections SET ?';
      conn.query(sql, result, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json(config.status.sc500);
        } else {
          console.log('Add a single election !');
          res.status(200).json(config.status.sc200);
        }
      });
    }
  });
});

router.put('/election/:electionId', (req, res) => {
  const sql = 'SELECT COUNT(*) count FROM elections WHERE name=?';
  conn.query(sql, [req.body.name], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(config.status.sc500);
    } else if (results[0].count > 0) {
      console.log('Duplicate election !');
      res.status(200).json(config.status.sc409);
    } else {
      const sql = 'UPDATE elections SET name=? WHERE id=?';
      conn.query(sql, [req.body.name, req.params.electionId], (err) => {
        if (err) {
          console.log(err);
          res.status(500).json(config.status.sc500);
        } else {
          console.log(`Update ${req.params.electionId}'s a single election !`);
          res.status(200).json(config.status.sc200);
        }
      });
    }
  });
});

router.delete('/election/:electionId', (req, res) => {
  const sql = 'DELETE FROM elections WHERE id=?';
  conn.query(sql, [req.params.electionId], (err) => {
    if (err) {
      console.log(err);
      res.status(500).json(config.status.sc500);
    } else {
      console.log(`Delete ${req.params.electionId}'s a single election !`);
      res.status(200).json(config.status.sc200);
    }
  });
});

router.get('/election/:electionId/candidate', (req, res) => {
  const sql = 'SELECT * FROM candidates WHERE election_id=?';
  conn.query(sql, [req.params.electionId], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(config.status.sc500);
    } else {
      console.log(`Response ${req.params.electionId}'s All candidate !`);
      res.json(results);
    }
  });
});

router.post('/election/:electionId/candidate', (req, res) => {
  const sql = 'SELECT COUNT(*) count FROM candidates WHERE election_id=? AND number=?';
  conn.query(sql, [req.params.electionId, req.body.number], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(config.status.sc500);
    } else if (results[0].count > 0) {
      console.log('Duplicate candidate !');
      res.status(200).json(config.status.sc409);
    } else {
      const result = {
        election_id: req.params.electionId,
        number: req.body.number,
        name: req.body.name,
        party: req.body.party,
        birth: req.body.birth,
        gender: req.body.gender,
        campaign_link: req.body.campaign_link,
      };
      const sql = 'INSERT INTO candidates SET ?';
      conn.query(sql, result, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json(config.status.sc500);
        } else {
          console.log(`Add ${req.params.electionId}'s a single candidate !`);
          res.status(200).json(config.status.sc200);
        }
      });
    }
  });
});

router.get('/election/:electionId/candidate/:number', (req, res) => {
  const sql = 'SELECT * FROM candidates WHERE election_id=? AND number=?';
  conn.query(sql, [req.params.electionId, req.params.number], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(config.status.sc500);
    } else {
      console.log(`Response ${req.params.electionId}'s number ${req.params.number} a single candidate !`);
      res.json(results[0]);
    }
  });
});

module.exports = router;
