'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jugadoresuruguays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_completo: {
        type: Sequelize.STRING
      },
      poscision: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.BIGINT
      },
      alturas: {
        type: Sequelize.DOUBLE
      },
      cuadro: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jugadoresuruguays');
  }
};