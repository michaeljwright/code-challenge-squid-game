import { Router, Request, Response } from 'express'

import logger from '../services/logger'

import { Guard } from '../models'

export const guardRouter: Router = Router()

/**
 * Gets all entity records
 */
guardRouter.get('/', async (req: Request, res: Response) => {
  const data = await Guard.findAll({ where: {}, order: [['id', 'DESC']] })
  logger(`Data: ${JSON.stringify(data)}`, 'info')
  res.send({ data: data })
})

/**
 * Gets an entity record
 */
guardRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  if (Number.isInteger(Number(id))) {
    const data = await Guard.findByPk(Number(id), {})
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
guardRouter.post('/', async (req: Request, res: Response) => {
  const { name, type } = req.body
  try {
    const data = await Guard.create({
      name,
      type
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
guardRouter.put('/', async (req: Request, res: Response) => {
  const { id, name, type } = req.body
  try {
    const data = await Guard.upsert({
      id: id,
      name: name,
      type: type
    })
    res.send(data)
  } catch (err) {
    logger(`Error. ${err}`, 'error')
    const { message } = err
    res.status(400).send({ message })
  }
})
