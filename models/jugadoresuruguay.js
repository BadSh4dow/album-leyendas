'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jugadoresuruguay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jugadoresuruguay.init({
    nombre_completo: DataTypes.STRING,
    poscision: DataTypes.STRING,
    edad: DataTypes.BIGINT,
    alturas: DataTypes.DOUBLE,
    cuadro: DataTypes.STRING,
    id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'jugadoresuruguay',
  });
  return jugadoresuruguay;
};