/* eslint @typescript-eslint/no-var-requires: "off" */

import { Sequelize, Options, RetryOptions } from 'sequelize'

import { Game, gameModelAttributes } from './game'
import { Player, playerModelAttributes } from './player'
import { Guard, guardModelAttributes } from './guard'

const config = require(__dirname + '/../config/config.js')[process.env.NODE_ENV]

const sequelizeOptions: Options = {
  retry: {
    match: [/ConnectionError/, /ConnectionRefusedError/, /ECONNREFUSED/],
    max: 10,
    backoffBase: 1000
  } as RetryOptions
}

const sequelize = new Sequelize({ ...config, ...sequelizeOptions })

// Synchronise models (info: the sync() method will sync your entity models with the postgress database without the need for migrations)
sequelize
  .sync({ alter: { drop: false } })
  .catch(({ message }) =>
    console.log(`Could not sync database with model: ${message}`)
  )

// Sequelize hooks

// Initialise Sequelize models
Game.init(gameModelAttributes, {
  sequelize,
  tableName: 'game'
})
Player.init(playerModelAttributes, {
  sequelize,
  tableName: 'player'
})
Guard.init(guardModelAttributes, {
  sequelize,
  tableName: 'guard'
})

// Sequelize entity relations / associations etc
Game.hasMany(Guard, { as: 'guards' })
Guard.belongsTo(Game, { as: 'game' })

export {
  Game,
  Player,
  Guard
}
