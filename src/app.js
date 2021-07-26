const aws = require("aws-sdk");
const fs = require("fs");

const key_id = "";// key id for IAM role
const secret_key =""; //secrete key fro the IAM role
const bucketName ="";//name of the s3 bucket to be used on AWS



const s3 = new aws.S3({
    accessKeyId: key_id,
    secretAccessKey: secret_key
});

const params ={
    Bucket: bucketName
}

// s3.createBucket(params, (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Bucket has been created");
//     }

// })


const uploadFile =(filename)=>{
    const fileContent = fs.readFileSync(filename);

    const params ={
        Bucket: bucketName,
        Key: "photo.jpg",
        Body: fileContent,
        ContentType: "image/jpg"
    }

    s3.upload(params, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("File upload was success");
        }
    })

}

uploadFile("/Users/joebbrianbundabunda/myProjects/node-aws-s3/src/pic.JPG");