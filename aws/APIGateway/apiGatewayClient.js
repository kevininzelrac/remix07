import { ApiGatewayV2Client } from "@aws-sdk/client-apigatewayv2";

const region = "us-east-1";
const apiGatewayClient = new ApiGatewayV2Client({ region });
export default apiGatewayClient;
