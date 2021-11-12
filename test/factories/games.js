const Faker = require('faker')
const { v4: uuidv4 } = require('uuid')

const { camelToSnakeCase } = require('./utils')

// Factories aren't in Typescript so that they can be used in seeders via Sequelize CLI (within docker container)

const names = ['Marbles', 'Glass Stepping Stones', 'Dalgona Candy', 'The Midnight Fight', 'Tug of War', 'Squid Game', 'Red Light, Green Light']

const createGame = (testCase = false) => {
  let game = {
    uid: uuidv4(),
    name: Faker.random.arrayElement(names),
    createdAt: new Date(),
    updatedAt: new Date()
  }

  return !testCase ? camelToSnakeCase(game) : game
}

const createGames = (amount, testCase = false) => {
  let games = [...Array(amount)].map(() => createGame(testCase))

  games.forEach((game, i) => {
    game.name = names[i]
  })

  return games
}

module.exports = {
  createGame,
  createGames
}
