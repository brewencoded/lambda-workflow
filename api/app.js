const axios = require('axios');
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

const hasParameter = (event) =>
    event.pathParameters !== null && Number.isInteger(parseInt(event.pathParameters.id))

const getAllBooks = (dbClient, tableName) => documentClient.scan({
    TableName: tableName
}).promise();

const getBook = (dbClient, tableName, id) => documentClient.get({
    Key: { id },
    TableName: tableName
}).promise();

exports.lambda_handler = async (event, context, callback) => {
    const tableName = process.env.BookTable;
    let response;
    let ret;
    try {
        if (hasParameter(event))
            ret = await getBook(documentClient, tableName, event.pathParameters.id);
        else
            ret = await getAllBooks(documentClient, tableName);
        
            response = {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*' // shouldn't use this in a real app
            },
            'body': JSON.stringify({
                success: true,
                data: ret
            })
        }
    }
    catch (err) {
        console.log(err);
        callback(err, null);
    }

    callback(null, response)
};
