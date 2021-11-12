/* eslint @typescript-eslint/no-var-requires: "off" */

// Seeders aren't in Typescript so that they can be executed via Sequelize CLI (within docker container)

const { createPlayers } = require('../../test/factories/players')

let fakePlayers = createPlayers(456)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed data
     */
    await queryInterface.bulkInsert('player', fakePlayers, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Remove seed data
     */
    await queryInterface.bulkDelete('player', null, {})
  }
}
