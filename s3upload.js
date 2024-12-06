//React build S3 upload script by deepcodr.

const S3 = require('aws-sdk/clients/s3');
const path =require('path');
const fs = require('fs');
const klawSync = require('klaw-sync');
const {lookup} = require('mime-types')

var awsoptions = {
    accessKeyId : process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey : process.env.AWS_ACCESS_KEY
}

const buildFolderPath = path.join(__dirname,'build')

var s3 = new S3(awsoptions);


const filePaths = klawSync(buildFolderPath,{
    nodir : true
});

filePaths.map((filePath) => {
    const fileContent = fs.createReadStream(filePath.path);
    const bucketPath = path.join('',path.relative(buildFolderPath,filePath.path));
    
    
    const config ={
        Bucket : 'srma',
        Body : fileContent,
        Key : bucketPath,
        ContentType : lookup(filePath.path) || "text/plain"
    }

    upload(config);
})

function upload(config){
    return new Promise((resolve) => {
        s3.upload(config, (err, data) => {
          if (err) console.error(err);
          console.log(`uploaded - ${data.Key}`);
          console.log(`located - ${data.Location}`);
          resolve(data.Location);
        });
    });
}