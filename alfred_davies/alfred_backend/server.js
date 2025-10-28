import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import taskRoutes from './routes/taskRoutes.js'
import { errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Task Manager API is running...')
})

app.use('/api/tasks', taskRoutes)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
