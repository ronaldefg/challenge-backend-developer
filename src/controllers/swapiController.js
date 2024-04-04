const SwapiService = require('../services/swapiService');

class SwapiController {
    static async getAllPeople(req, res) {
        const { page } = req.query;
        try {
            const allPeople = await SwapiService.getAllPeople(page);
            res.json(allPeople);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los personajes de SWAPI' });
        }
    }
    static async getPeople(req, res) {
        const { id } = req.params;
        try {
            const people = await SwapiService.getPeople(id);
            res.json(people);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el personaje de SWAPI' });
        }
    }
}

module.exports = SwapiController;
