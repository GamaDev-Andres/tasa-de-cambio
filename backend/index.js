import express from 'express'
import cors from 'cors'

import latestRouter from './routes/latest.js'

const app = express()
app.use(cors())
app.use(express.json({ extended: true }))

app.use('/api/latest', latestRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log('server running port : ' + PORT)
})
