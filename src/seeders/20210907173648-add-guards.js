/* eslint @typescript-eslint/no-var-requires: "off" */

// Seeders aren't in Typescript so that they can be executed via Sequelize CLI (within docker container)

const { createGuards } = require('../../test/factories/guards')

let fakeGuards = createGuards(100)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed data
     */
    await queryInterface.bulkInsert('guard', fakeGuards, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Remove seed data
     */
    await queryInterface.bulkDelete('guard', null, {})
  }
}
