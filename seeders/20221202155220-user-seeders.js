'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Suyud',
        profession: 'Administrator',
        role: 'admin',
        email: 'ohmyud@gmail.com',
        pass: await bcrypt.hash('rahasia123', 10),
        created_at: new Date(),
      },
      {
        name: 'Widiono',
        profession: 'Operator',
        role: 'operator',
        email: 'widiono@gmail.com',
        pass: await bcrypt.hash('rahasia123', 10),
        created_at: new Date(),
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
