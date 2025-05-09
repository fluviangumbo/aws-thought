const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const paramsConfig = require('../utils/param-config');

const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
        callback(null, '');
    },
});

// 'image' is being used as key for image object
const upload = multer({ storage }).single('image');

const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
});

router.post('/image-upload', upload, (req, res) => {
    console.log("post('/api/image-upload'", req.file);
    const params = paramsConfig(req.file);
    s3.upload(params, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        }
        res.json(data);
    })
});

module.exports = router;