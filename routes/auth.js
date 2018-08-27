const router = require('express').Router();
const bkfd2Password = require('pbkdf2-password');
const passport = require('passport');

const conn = require('../models/mysql');
const config = require('../config/config');

const hasher = bkfd2Password();

router.post('/login', passport.authenticate('local'), (req, res) => {
  if (req.user.auth_id === 'admin') {
    res.status(200).json(config.status.scAdmin);
  } else {
    res.status(200).json(config.status.scGuest);
  }
});

router.get('/login/success', (req, res) => {
  res.status(200).json(config.status.sc200);
});

router.get('/login/fail', (req, res) => {
  res.status(200).json(config.status.sc403);
});

router.post('/register', (req, res) => {
  const sql = "SELECT COUNT(*) AS 'count' FROM users WHERE auth_id=?";
  conn.query(sql, [req.body.auth_id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(config.status.sc500);
    }
    if (results[0].count > 0) {
      console.log('Duplicate user !');
      res.status(200).json(config.status.sc409);
    } else {
      hasher({ password: req.body.password }, (err, pass, _salt, hash) => {
        const user = {
          auth_id: req.body.auth_id,
          password: hash,
          salt: _salt,
          name: req.body.name,
          gender: req.body.gender,
          birth: req.body.birth,
          tel: req.body.tel,
          region: req.body.region,
          admin_state: 0,
        };
        const sql = 'INSERT INTO users SET ?';
        conn.query(sql, user, (err) => {
          if (err) {
            console.log(err);
            res.status(500).json(config.status.sc500);
          } else {
            console.log('Add new user !');
            res.status(200).json(config.status.sc200);
          }
        });
      });
    }
  });
});

module.exports = router;
