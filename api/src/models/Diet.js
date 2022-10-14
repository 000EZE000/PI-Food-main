const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Diet = (sequelize) => {
  sequelize.define(
    "diet",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      info: {
        type: DataTypes.TEXT,
      }
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Diet;
