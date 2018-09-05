let AWS = require('aws-sdk');

const config = require('../config/config');

AWS.config.accessKeyId = config.aws.accessKeyId;
AWS.config.secretAccessKey = config.aws.secretAccessKey;
AWS.config.region = config.aws.region;

let S3 = new AWS.S3();

module.exports = S3;
