const { v4: uuidv4 } = require('uuid');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
        Bucket: 'user-images-ce6f56ab-0421-461a-bc8d-aabe22271bcd',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer,
    };

    return imageParams
};