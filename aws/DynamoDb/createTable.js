import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import dynamoDBClient from "./dynamoDBClient.js";

export const createTable = async ({ tableName }) => {
  try {
    const response = await dynamoDBClient.send(
      new CreateTableCommand({
        TableName: tableName,
        TableClass: "STANDARD",
        BillingMode: "PAY_PER_REQUEST",
        DeletionProtectionEnabled: false,
        AttributeDefinitions: [
          {
            AttributeName: "PK",
            AttributeType: "S",
          },
          {
            AttributeName: "SK",
            AttributeType: "S",
          },
        ],
        KeySchema: [
          {
            AttributeName: "PK",
            KeyType: "HASH",
          },
          {
            AttributeName: "SK",
            KeyType: "RANGE",
          },
        ],
      })
    );
    console.log(`SUCCESFULLY CREATED DynamoDB TABLE ${tableName}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export default createTable;
//createTable({ tableName: "test01" });
