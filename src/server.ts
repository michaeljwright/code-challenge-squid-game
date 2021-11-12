import * as dotenv from 'dotenv'
dotenv.config()

import { app } from './app'

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
