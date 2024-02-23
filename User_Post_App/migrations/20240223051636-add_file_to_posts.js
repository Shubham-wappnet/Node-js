'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('posts', 'file_path', {
      type: Sequelize.STRING,
      allowNull: true 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('posts','file_path');
  }
};
