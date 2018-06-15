const axios = require('axios');
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.lambda_handler = async (event, context, callback) => {
    console.dir(event['pathParameters'])
    let response;
    try {
        // const ret = await documentClient.get({
        //     Key: {
        //         id: "1"
        //     },
        //     TableName: process.env.BookTable
        // }).promise();
        response = {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*' // shouldn't use this in a real app
            },
            'body': JSON.stringify({
                success: true,
                data: event //ret.Item
            })
        }
    }
    catch (err) {
        console.log(err);
        callback(err, null);
    }

    callback(null, response)
};
