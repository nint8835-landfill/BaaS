import { APIGatewayEvent } from "aws-lambda";
import { getImage } from "./src/utils";
import { OPERATIONS } from "./src/operations";

export async function hello(event: APIGatewayEvent): Promise<any> {
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
        body: (await operator(image)).toString("base64"),
        headers: {
          "Content-Type": "image/png"
        }
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
