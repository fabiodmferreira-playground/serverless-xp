import dynamoClient, { UsersTableName } from "./dynamoClient";


export const fetchUsers = async () => {
  const rows = await dynamoClient.scan({
    TableName: UsersTableName
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(rows.Items),
  };
};

export const createUser = async (req: any) => {
  if (!req.body || req.body.indexOf("email=") < 0) {
    return {
      statusCode: 400,
      message: "invalid request"
    }
  }

  const email = req.body.split("=")[1];

  await dynamoClient.put({
    TableName: UsersTableName,
    Item: {
      "email": email
    }
  }).promise();

  return {
    statusCode: 202,
    message: "Ok"
  }
}
