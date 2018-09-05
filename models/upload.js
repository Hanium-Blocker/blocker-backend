const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const config = require('../config/config');

module.exports = (fileName) => {
  AWS.config.accessKeyId = config.aws.accessKeyId;
  AWS.config.secretAccessKey = config.aws.secretAccessKey;
  AWS.config.region = config.aws.region;

  const s3 = new AWS.S3();

  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'jobata/blocker',
      key: (req, file, cb) => {
        cb(null, fileName);
      },
      acl: 'public-read-write',
    }),
  });

  return upload;
};
