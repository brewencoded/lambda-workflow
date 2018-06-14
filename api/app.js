const axios = require('axios');
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.lambda_handler = async (event, context, callback) => {
    let response;
    try {
        const ret = await documentClient.get({
            Key: {
                id: "1"
            },
            TableName: "Books"
        }).promise();
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                success: true,
                data: ret.Item
            })
        }
    }
    catch (err) {
        console.log(err);
        callback(err, null);
    }

    callback(null, response)
};
