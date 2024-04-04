const axios = require('axios');
const SwapiModel = require('../models/swapiModel');
const API_URL = 'https://swapi.py4e.com/api';
class SwapiService {
    static async getAllPeople(page) {
        if (page === undefined || page === null) {
            page = 1;
        }
        try {
            const response = await axios.get(API_URL + `/people/?page=${page}`);
            const peopleData = response.data.results;
            return peopleData.map(person => new SwapiModel(person));
        } catch (error) {
            console.error('Error al obtener el personaje de SWAPI:', error);
            throw new Error('No se pudo obtener el personaje de SWAPI');
        }
    }
    static async getPeople(id) {
        try {
            const response = await axios.get(API_URL + `/people/${id}/`);
            const data = response.data;
            if (data.homeworld) {
                const homeworldResponse = await axios.get(data.homeworld);
                data.homeworld = homeworldResponse.data;
            }
            return new SwapiModel(data);
        } catch (error) {
            console.error('Error al obtener el personaje de SWAPI:', error);
            throw new Error('No se pudo obtener el personaje de SWAPI');
        }
    }
    static async getPlanet(id) {
        try {
            const response = await axios.get(API_URL + `/planets/${id}/`);
            const data = response.data;
            return new SwapiModel(data);
        } catch (error) {
            console.error('Error al obtener el planeta de SWAPI:', error);
            throw new Error('No se pudo obtener el planeta de SWAPI');
        }
    }
}

module.exports = SwapiService;