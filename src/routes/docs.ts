import { Router } from 'express'
import { setup, serve } from 'swagger-ui-express'

import openapi from '../../openapi.json'

export const docsRouter: Router = Router()

const { ENV = 'local' } = process.env

// Only expose these in non-production environments
if (ENV !== 'prd') {
  docsRouter.use('/', serve)
  docsRouter.get('/', setup(openapi))
}
