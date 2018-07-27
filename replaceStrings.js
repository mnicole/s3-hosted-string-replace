var fs = require('fs');
var pathToFiles = process.argv[2];

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
            // Just Apple things
            // Read each file
            console.log(`Reading ${fileName}`);
            fs.readFile(filePath, 'utf8', function(err, data) {
                if (err) {
                    return console.log(err);
                }

                // Replace strings
                var stringRep = data.replace(/thing-to-replace/g, 'new-thing');
                stringRep = stringRep.replace(/other-thing-to-replace/g, 'new-thing-2');

                // Write file
                fs.writeFile(filePath, stringRep, 'utf8', function(err) {
                    if (err) return console.log(err);
                });
            });
        }
    });
});
