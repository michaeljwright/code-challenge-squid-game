const Faker = require('faker')
const { v4: uuidv4 } = require('uuid')

const { camelToSnakeCase } = require('./utils')

// Factories aren't in Typescript so that they can be used in seeders via Sequelize CLI (within docker container)

const createPlayer = (testCase = false) => {
  let player = {
    uid: uuidv4(),
    number: Faker.datatype.number({
      'min': 1,
      'max': 456
    }),
    name: Faker.name.firstName() + ' ' + Faker.name.lastName(),
    createdAt: new Date(),
    updatedAt: new Date()
  }

  return !testCase ? camelToSnakeCase(player) : player
}

const createPlayers = (amount, testCase = false) => {
  let players = [...Array(amount)].map(() => createPlayer(testCase))

  players.forEach((player, i) => {
    player.number = i + 1
  })

  return players
}

module.exports = {
  createPlayer,
  createPlayers
}
