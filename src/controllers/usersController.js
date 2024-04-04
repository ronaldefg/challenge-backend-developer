const UserService = require('../services/usersService');

class UsersController {

    constructor(dynamoDbClient, tableName) {
        this.userService = new UserService(dynamoDbClient, tableName);
    }
    async getUser(req, res) {
        const userId = req.params.userId;
        try {
            const user = await this.userService.getUser(userId);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el usuario' });
        }
    }

    async createUser(req, res) {
        const { userId, name } = req.body;
        try {
            const createdUser = await this.userService.createUser(userId, name);
            res.json(createdUser);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
    }

    async getAllUsers(req, res) {
        // TODO: Implement pagination logic
        try {
            const allUsers = await this.userService.getAllUsers();
            res.json(allUsers);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener todos los usuarios' });
        }
    }
}

module.exports = UsersController;
