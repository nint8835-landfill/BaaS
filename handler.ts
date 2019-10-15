import { APIGatewayEvent } from "aws-lambda";
import { getImage, getImageSize } from "./src/utils";

export async function hello(event: APIGatewayEvent): Promise<any> {
  if (event.queryStringParameters && event.queryStringParameters.url) {
    const image = await getImage(event.queryStringParameters.url);
    const imageSize = await getImageSize(image);
    return {
      statusCode: 200,
      body: JSON.stringify({
        width: imageSize.width,
        height: imageSize.height
      })
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Please specify a "url" query parameter'
      })
    };
  }
}
