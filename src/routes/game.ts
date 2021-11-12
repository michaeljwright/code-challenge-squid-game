import { Router, Request, Response } from 'express'

import logger from '../services/logger'

import { Game } from '../models'

export const gameRouter: Router = Router()

/**
 * Gets all entity records
 */
gameRouter.get('/', async (req: Request, res: Response) => {
  const data = await Game.findAll({ where: {}, order: [['id', 'DESC']] })
  logger(`Data: ${JSON.stringify(data)}`, 'info')
  res.send({ data: data })
})

/**
 * Gets an entity record
 */
gameRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  if (Number.isInteger(Number(id))) {
    const data = await Game.findByPk(Number(id), {})
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
gameRouter.post('/', async (req: Request, res: Response) => {
  const { name } = req.body
  try {
    const data = await Game.create({
      name
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
gameRouter.put('/', async (req: Request, res: Response) => {
  const { id, name } = req.body
  try {
    const data = await Game.upsert({
      id: id,
      name: name
    })
    res.send(data)
  } catch (err) {
    logger(`Error. ${err}`, 'error')
    const { message } = err
    res.status(400).send({ message })
  }
})
