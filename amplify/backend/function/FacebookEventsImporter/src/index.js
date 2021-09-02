/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_FBEVENTS_ARN
	STORAGE_FBEVENTS_NAME
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName : `FbEvents-${ENV}`,
    /* Item properties will depend on your application concerns */
    Item: {
        name: "Live tour with Amazon",
        start_time: "2021-02-18T14:00:00+0200",
        id: "225897619187576"
    }
  }
async function createItem(){
try {
    await docClient.put(params).promise();
} catch (err) {
    return err;
}
}


exports.handler = async (event) => {
    // TODO implement
    await createItem();
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
