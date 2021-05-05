import 'source-map-support/register';
//import express, { Request, Response } from 'express';
import { APIGatewayProxyHandler } from 'aws-lambda';
import * as ServerlessHttp from 'serverless-http';
import App from './src/app';

export const main: APIGatewayProxyHandler = ServerlessHttp(App.app);
