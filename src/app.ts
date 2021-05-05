import * as bodyParser from "body-parser";
import * as AWS from 'aws-sdk';
import express, {Express} from "express";
import {PeliculaModule} from "./modules/pelicula/init";

class App {
    public  app           : Express = express();
    private dynamoDbClient: AWS.DynamoDB.DocumentClient;
    private IS_OFFLINE    : any    = process.env.IS_OFFLINE;

    constructor(_toTest: boolean = false) {
        this.config();
        this.initDynamoDB();
        this.initModules();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    public retrieveDynamoDbClient() {
        return this.dynamoDbClient;
    }

    private initDynamoDB() {
        if(this.IS_OFFLINE ==- 'true') {
            this.dynamoDbClient = new AWS.DynamoDB.DocumentClient({
                region: 'localhost',
                endpoint: 'http://localhost:8000'
            });
        } else {
            this.dynamoDbClient = new AWS.DynamoDB.DocumentClient();
        }
    }

    private initModules() {
        new PeliculaModule(this.app);
    }
}

export default new App();