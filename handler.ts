import { APIGatewayEvent, ProxyResult } from "aws-lambda";
import { getImage, saveImage } from "./src/utils";
import { OPERATIONS } from "./src/operations";

export async function hello(event: APIGatewayEvent): Promise<ProxyResult> {
  if (
    event.queryStringParameters &&
    event.queryStringParameters.url &&
    event.queryStringParameters.operation
  ) {
    const operator = OPERATIONS[event.queryStringParameters.operation];
    if (operator) {
      const image = await getImage(event.queryStringParameters.url);
      return {
        statusCode: 200,
        body: await saveImage(await operator(image)),
        headers: {
          "Content-Type": "image/png"
        },
        isBase64Encoded: true
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Invalid operation"
        })
      };
    }
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Please specify a "url" and "operation" query parameters'
      })
    };
  }
}
