'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('posts', [
        {
          postId: 10,
          title: 'graduate',
          description: 'training will provide',
          status: 'active',
          userId: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        }])
    }

    catch (err) {
      console.log("seed is no tcreated", err)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});

  }
};
