const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET
});

const uploadFile = async (file) => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: Date.now() + "-" + file.originalname,
    Body: file.buffer
  };

  const data = await s3.upload(params).promise();
  return data.Location;
};

module.exports = uploadFile;