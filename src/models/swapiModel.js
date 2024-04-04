class SwapiModel {
    constructor(data) {
        this.nombre = data.name;
        this.altura = data.height;
        this.masa = data.mass;
        this.colorCabello = data.hair_color;
        this.colorPiel = data.skin_color;
        this.colorOjos = data.eye_color;
        this.anoNacimiento = data.birth_year;
        this.genero = data.gender;
        this.planetaNatal = data.homeworld;
        this.peliculas = data.films;
        this.especies = data.species;
        this.vehiculos = data.vehicles;
        this.navesEspaciales = data.starships;
        this.creado = data.created;
        this.editado = data.edited;
        this.enlace = data.url;
    }
}

module.exports = SwapiModel;