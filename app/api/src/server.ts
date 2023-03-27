import express from 'express'

import './config/dotenv'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(process.env.API_PORT, () => console.log('Server listening'))
