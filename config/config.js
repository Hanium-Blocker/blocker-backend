module.exports = {
  express: {
    host: 'localhost',
    port: '3000',
  },
  mysql: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'blocker',
  },
  session: {
    secret: 'j@!wn3R4^%&dwEq!9!&4d',
    resave: 'false',
    saveUninitialized: 'true',
  },
  status: {
    scAdmin: {
      code: 200,
      message: 'ADMIN',
    },
    scGuest: {
      code: 200,
      message: 'GUEST',
    },
    sc200: {
      code: 200,
      message: 'OK',
    },
    sc403: {
      code: 403,
      message: 'FORBIDDEN',
    },
    sc409: {
      code: 409,
      message: 'CONFLICT',
    },
    sc500: {
      code: 500,
      message: 'INTERNAL SERVER ERROR',
    },
  },
};
