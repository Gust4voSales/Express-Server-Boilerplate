if (process.env.NODE_ENV !== 'production') 
  require('dotenv').config()

// EXPORTS THE ENVIROMENT VARIABLES FROM .env FILE TO THE WHOLE APPLICATION
module.exports = {
  PORT: process.env.PORT,
}