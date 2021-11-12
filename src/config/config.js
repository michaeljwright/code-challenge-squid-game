/* eslint @typescript-eslint/no-var-requires: "off" */

// This Sequelize config isn't in Typescript so that it can be used via Sequelize CLI (within docker container)

const fs = require('fs')
require('dotenv').config()

module.exports = {
  development: {
    host: process.env.PGHOST,
    port: process.env.PGPORT || 5438,
    username: process.env.PGUSER,
    password: process.env.PGPASS,
    database: process.env.PGDATABASE,
    dialect: 'postgres',
    define: {
      timestamps: true,
      underscored: true
    }
  },
  production: {
    dialect: 'postgres',
    host: process.env.PGHOST,
    username: process.env.PGUSER,
    password: process.env.PGPASS,
    database: process.env.PGDATABASE,
    logging: false,
    define: {
      timestamps: true,
      underscored: true
    }
  }
}
