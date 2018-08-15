const bkfd2Password = require('pbkdf2-password');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const conn = require('./mysql');

const hasher = bkfd2Password();

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.auth_id);
  });

  passport.deserializeUser((id, done) => {
    const sql = 'SELECT * FROM users WHERE auth_id=?';
    conn.query(sql, [id], (err, results) => {
      if (err) {
        console.log(err);
        done('There is no user.');
      } else {
        done(null, results[0]);
      }
    });
  });

  passport.use(new LocalStrategy({
    usernameField: 'auth_id',
    passwordField: 'password',
    session: true,
    passReqToCallback: false,
  }, ((authId, password, done) => {
    const sql = 'SELECT * FROM users WHERE auth_id=?';
    conn.query(sql, [authId], (err, results) => {
      if (err || results.length === 0) {
        return done('There is no user.');
      }
      return hasher({ password, salt: results[0].salt }, (err, pass, salt, hash) => {
        if (hash === results[0].password) {
          done(null, results[0]);
        } else {
          console.log('Password Error');
          done(null, false);
        }
      });
    });
  })));
};
