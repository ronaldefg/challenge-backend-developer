const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

const usersRoutes = require('./routes/usersRoutes');
const swapiRoutes = require('./routes/swapiRoutes');
const { notFound, errorHandler } = require('./utils/errorHandlers');

const USERS_TABLE = process.env.USERS_TABLE;
const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client);

app.use(express.json());

app.use('/api', usersRoutes);
app.use('/api/swapi', swapiRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports.handler = serverless(app);
