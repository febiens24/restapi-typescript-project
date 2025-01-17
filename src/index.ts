import express, { type Application } from 'express'
import 'dotenv/config'
import appMiddleware from './middleware'

const app: Application = express()
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3008

app.use(appMiddleware)

app.listen(port, () => {
  console.log(`Restapi IGR listerning on http://localhost:${port}`)
})
export default app
