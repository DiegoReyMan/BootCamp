// const { Sequelize, DataTypes } = require('sequelize');

// const alias = 'Genre';
// const fields = {
//                 id: {
//                     type: DataTypes.INTEGER,
//                     autoIncrement: true,
//                     primaryKey: true,
//                     unique: true,
//                     allowNull: false
//                     },
//                 name:{
//                     type: DataTypes.STRING(100),
//                     allowNull: false
//                 },
//                 ranking:{
//                     type: DataTypes.INTEGER.UNSIGNED,
//                     unique: true,
//                     allowNull: false,
                    
//                 }, 
//                 active: {
//                     type: DataTypes.TINYINT(1),
//                     allowNull: false,
//                     defaultValue: 1
//                 }
//             };

// const extra = {tableName: 'genres', timestamps: true};

// const Genre = Sequelize.define(alias, fields, extra);

// return Genre;
// //module.exports = Genre;
