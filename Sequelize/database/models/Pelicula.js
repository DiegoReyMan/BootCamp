module.exports = (sequelize, DataTypes) => {
    let alias = "Peliculas";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
            
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        awards: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        release_date: {
            type: DataTypes.Date
        },
        length: {
            type: DataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER
        },

    };

    let config = {
        tableName: "movies",
        timestamp: false,
    }
    
    const Pelicula = sequelize.define(alias, cols, config);

    return Pelicula;

}