const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const params = {
    TableName: 'Thoughts',
    KeySchema: [
        { AttributeName: 'username', KeyType: 'HASH' }, // Partition Key
        { AttributeName: 'createdAt', KeyType: 'RANGE' }, // Sort Key
    ],
    AttributeDefinitions: [
        { AttributeName: 'username', AttributeType: 'S' },
        { AttributeName: 'createdAt', AttributeType: 'N' },
    ],
    ProvisionedThroughout: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
    },
};