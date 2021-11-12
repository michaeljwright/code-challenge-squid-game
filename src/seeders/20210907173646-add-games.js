/* eslint @typescript-eslint/no-var-requires: "off" */

// Seeders aren't in Typescript so that they can be executed via Sequelize CLI (within docker container)

const { createGames } = require('../../test/factories/games')

let fakeGames = createGames(7)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed data
     */
    await queryInterface.bulkInsert('game', fakeGames, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Remove seed data
     */
    await queryInterface.bulkDelete('game', null, {})
  }
}
