//const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const alias = 'Movie';
const fields = {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    unique: true,
                    allowNull: false
                    },
                title:{
                    type: DataTypes.STRING(500),
                    allowNull: false
                },
                rating:{
                    type: DataTypes.DECIMAL(3,1),
                    unique: true,
                    allowNull: false
                }, 
                awards: {
                    type: DataTypes.INTEGER,
                    unique: true,
                    defaultValue: 0
                },
                release_date: {
                    type: sequelize.DataTypes.DATE,
                    allowNull: false
                },
                length: {
                    type: DataTypes.INTEGER,
                    unique: true,
                    defaultValue: null
                },
                genre_id: {
                    type: DataTypes.INTEGER,
                    unique: true,
                    defaultValue: null
                }
            };

const extra = {timestamps: true};

const Movie = sequelize.define(alias, fields, extra);

return Movie;
}