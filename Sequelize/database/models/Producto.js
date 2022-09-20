module.exports = (sequelize, DataTypes) => {
    const alias = "productos";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING
        },
        precio: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }

    };

    const config = {
        timestamps: false,
        tableName: "productos"
    }
    
    const Producto = sequelize.define(alias, cols, config);

    return Producto;

}