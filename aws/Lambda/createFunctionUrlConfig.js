import { CreateFunctionUrlConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import

const createFunctionUrlConfig = async ({ client, functionName }) => {
  try {
    const response = await client.send(
      new CreateFunctionUrlConfigCommand({
        FunctionName: functionName, // required
        AuthType: "NONE", //"NONE" || "AWS_IAM", // required
        InvokeMode: "RESPONSE_STREAM", //"BUFFERED" || "RESPONSE_STREAM",
      })
    );
    console.log(`SUCCESFULLY CREATED LAMBDA FUNCTION URL ${funcName}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export default createFunctionUrlConfig;
