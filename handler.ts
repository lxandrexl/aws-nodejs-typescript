import 'source-map-support/register';
import { APIGatewayProxyHandler } from 'aws-lambda';
import ServerlessHttp from 'serverless-http';
import App from './src/app';

export const main: APIGatewayProxyHandler = ServerlessHttp(App.app);
