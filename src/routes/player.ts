import { Router, Request, Response } from 'express'

import logger from '../services/logger'

import { Player } from '../models'

export const playerRouter: Router = Router()

/**
 * Gets all entity records
 */
playerRouter.get('/', async (req: Request, res: Response) => {
  const data = await Player.findAll({ where: {}, order: [['id', 'DESC']] })
  logger(`Data: ${JSON.stringify(data)}`, 'info')
  res.send({ data: data })
})

/**
 * Gets an entity record
 */
playerRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  if (Number.isInteger(Number(id))) {
    const data = await Player.findByPk(Number(id), {})
    if (data) {
      res.send(data)
    } else {
      logger('Error. Unknown data', 'error')
      res.status(404).send({ message: 'Unknown data' })
    }
  } else {
    logger('Error. Expected ID', 'error')
    res.status(400).send({ message: 'Expected ID' })
  }
})

/**
 * Creates an entity record
 */
playerRouter.post('/', async (req: Request, res: Response) => {
  const { number, name } = req.body
  try {
    const data = await Player.create({
      number, name
    }, {})
    res.send(data)
  } catch (err) {
    logger(`Error. ${err}`, 'error')
    const { message } = err
    res.status(400).send({ message })
  }
})

/**
 * Updates an entity record
 */
playerRouter.put('/', async (req: Request, res: Response) => {
  const { id, number, name } = req.body
  try {
    const data = await Player.upsert({
      id: id,
      number: number,
      name: name
    })
    res.send(data)
  } catch (err) {
    logger(`Error. ${err}`, 'error')
    const { message } = err
    res.status(400).send({ message })
  }
})
