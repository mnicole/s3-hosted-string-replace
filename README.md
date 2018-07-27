# S3 Hosted String Replace

### Description
Set of Node CLI scripts for downloading s3 files, doing string replaces, and reuploading them. Uses the aws-sdk package.

### Prerequisites
You must have your AWS keys stored locally to use this. See [aws config files](https://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html) for more information.

### Scripts
#### getFiles.js
Run: `node getFiles.js path/to/file/with/filenames path/to/folder/to/upload/them/to bucketName`

Example: `node getFiles.js files.txt ./files/ my-bucket-name`

The upload folders must already exist. Your files.txt should list each file name you want to download separated by a new line.

#### replaceStrings.js:
Run: `node replaceStrings.js path/to/folder/where/files/exist`

Example: `node replaceStrings.js /Users/you/Desktop/stuff`

The folder must already exist. You should edit the replaceStrings.js file with the regex of what you want to replace.

#### uploadFiles.js
Run: `node replaceStrings.js path/to/folder/where/files/exist bucketName`

Example: `node uploadFiles.js /Users/you/Desktop/stuff my-bucket-name`

The folder must already exist. This example uses Content-Type: text/html. You can change this in uploadFiles.js.
