const router = require('express').Router();
const bkfd2Password = require('pbkdf2-password');

const passport = require('passport');
const conn = require('../models/mysql');
const config = require('../config/config');

const hasher = bkfd2Password();

router.post(
  '/login',
  passport.authenticate(
    'local',
    {
      successRedirect: '/info/candidate',
      failureRedirect: '/auth/login/fail',
      failureFlash: false,
    },
  ),
);

router.post('/login/fail', (req, res) => {
  res.status(403).json(config.status.sc403);
});

router.post('/register', (req, res) => {
  const sql = "SELECT COUNT(*) AS 'count' FROM users WHERE auth_id=?";
  conn.query(sql, [req.body.auth_id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json(config.status.sc500);
    }
    if (results.length > 0) {
      console.log('Duplicate user !');
      res.status(409).json(config.status.sc409);
    } else {
      hasher({ password: req.body.password }, (err, pass, _salt, hash) => {
        const user = {
          auth_id: req.body.auth_id,
          password: hash,
          salt: _salt,
          username: req.body.username,
          gender_id: req.body.gender_id,
          birth: req.body.birth,
          tel: req.body.tel,
          region_id: req.body.region_id,
          admin_state: req.body.admin_state,
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
