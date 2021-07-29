import express from 'express'
import cors from 'cors'
import router from './router'
import { PORT, } from './config/env'
import ErrorHandler from './middlewares/ErrorHandler'

const app = express()

app.use(cors()) 
app.use(express.json())

app.use(router)
app.use(ErrorHandler)

app.listen(PORT, () => {
  console.log("SERVER RUNNING ON PORT " + PORT)
})