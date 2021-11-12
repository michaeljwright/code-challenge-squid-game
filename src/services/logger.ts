import winston from 'winston'

import { LoggingWinston } from '@google-cloud/logging-winston'

const loggingWinston = new LoggingWinston()

const { createLogger, format, transports } = winston

const { LOG_LEVEL = 'debug', ENV = 'local' } = process.env

const outputLogger = createLogger({
  format: format.combine(
    format.errors({ stack: true }),
    format.metadata(),
    format.json()
  ),
  level: LOG_LEVEL,
  transports: [
    new winston.transports.Console(),
    // loggingWinston,
  ]
})

const logger = (message: any, logLevel: string = LOG_LEVEL, localOnly: string = ENV) => {
  if (logLevel == 'error') {
    return outputLogger.error({
      level: logLevel,
      message: JSON.stringify(message)
    })
  } else {
    return outputLogger.log({
      level: logLevel,
      message: JSON.stringify(message)
    })
  }
}

export default logger
