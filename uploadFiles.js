var fs = require('fs');
var S3 = require('aws-sdk/clients/s3');
var AWS = require('aws-sdk');
var pathToFiles = process.argv[2];
var bucket = process.argv[3];

// Loop through all the files in the directory
fs.readdir(pathToFiles, function(err, files) {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    files.forEach(function(file, index) {
        var fileName = file.toString();
        var filePath = pathToFiles + '/' + file;

        if (!fileName.includes('.DS_Store')) {
            // Read each file
            console.log(`Uploading ${fileName}`);

            fs.readFile(filePath, 'utf8', function(err, data) {
                if (err) {
                    return console.log(err);
                }
                var s3 = new AWS.S3();
                var uploadParams = {
                    Bucket: bucket,
                    Key: fileName,
                    ContentType: 'text/html',
                    Body: data
                };

                // Upload to S3
                s3.upload(uploadParams, function(err, data) {
                    if (err) {
                        console.log('Error', err);
                    }
                    if (data) {
                        console.log('Upload Success', data.Location);
                    }
                });
            });
        }
    });
});
