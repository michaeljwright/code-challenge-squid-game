const Faker = require('faker')
const { v4: uuidv4 } = require('uuid')

const { camelToSnakeCase } = require('./utils')

// Factories aren't in Typescript so that they can be used in seeders via Sequelize CLI (within docker container)

const types = ['Square', 'Circle', 'Triangle']

const createGuard = (testCase = false) => {
  let guard = {
    uid: uuidv4(),
    name: Faker.name.firstName() + ' ' + Faker.name.lastName(),
    type: Faker.random.arrayElement(types),
    gameId: Faker.datatype.number({
      'min': 1,
      'max': 7
    }),
    createdAt: new Date(),
    updatedAt: new Date()
  }

  return !testCase ? camelToSnakeCase(guard) : guard
}

const createGuards = (amount, testCase = false) => {
  let guards = [...Array(amount)].map(() => createGuard(testCase))

  return guards
}

module.exports = {
  createGuard,
  createGuards
}
