const express = require('express');
const router = express.Router();
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const UsersController = require('../controllers/usersController');

const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client);
const USERS_TABLE = process.env.USERS_TABLE;

const usersController = new UsersController(dynamoDbClient, USERS_TABLE);

router.get('/users/:userId', usersController.getUser.bind(usersController));
router.post('/users', usersController.createUser.bind(usersController));
router.get('/users', usersController.getAllUsers.bind(usersController));

module.exports = router;