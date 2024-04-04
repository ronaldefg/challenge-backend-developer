const { PutCommand, GetCommand, ScanCommand } = require("@aws-sdk/lib-dynamodb");

class UserService {
    constructor(dynamoDbClient, tableName) {
        this.dynamoDbClient = dynamoDbClient;
        this.tableName = tableName;
    }

    async getAllUsers() {
        const params = {
            TableName: this.tableName,
        };

        try {
            const response = await this.dynamoDbClient.send(new ScanCommand(params));
            return response.Items;
        } catch (error) {
            console.error("Error al obtener todos los usuarios:", error);
            throw new Error("No se pudieron obtener todos los usuarios");
        }
    }

    async getUser(userId) {
        const params = {
            TableName: this.tableName,
            Key: {
                userId: userId,
            },
        };

        try {
            const { Item } = await this.dynamoDbClient.send(new GetCommand(params));
            return Item;
        } catch (error) {
            console.error("Error al obtener el usuario:", error);
            throw new Error("No se pudo recuperar el usuario");
        }
    }

    async createUser(userId, name) {
        const params = {
            TableName: this.tableName,
            Item: {
                userId: userId,
                name: name,
            },
        };

        try {
            await this.dynamoDbClient.send(new PutCommand(params));
            return { userId, name };
        } catch (error) {
            console.error("Error al crear usuario:", error);
            throw new Error("No se pudo crear el usuario");
        }
    }
}

module.exports = UserService;
