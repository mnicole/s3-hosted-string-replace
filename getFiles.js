var fs = require('fs');
var S3 = require('aws-sdk/clients/s3');
var AWS = require('aws-sdk');

var filePath = process.argv[2];
var folderToUploadTo = process.argv[3];
var bucket = process.argv[4];

var fileList = fs
    .readFileSync(filePath)
    .toString()
    .split('\n');

// Get files from s3
fileList.forEach(function(key, index) {
    console.log('Starting to download file', key);

    var s3 = new AWS.S3();
    var s3Params = {
        Bucket: bucket,
        Key: key
    };
    var readStream = s3.getObject(s3Params).createReadStream();
    var writeStream = fs.createWriteStream(folderToUploadTo + key);
    readStream.pipe(writeStream);
});
