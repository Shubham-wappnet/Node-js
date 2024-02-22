'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'sample-user@gmail.com',
        name: 'sample-user',
        phone: '6789567890',
        status: 'active',
         createdAt: new Date(),
         updatedAt: new Date()
      }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null,{});
  }
};
