require('dotenv').config()
import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import router from './router'
import ErrorHandler from './middlewares/ErrorHandler'

const app = express()

app.use(cors()) 
app.use(express.json())

app.use(router)
app.use(ErrorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log("SERVER RUNNING ON PORT " + PORT)
})