const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
async function connectDB() {
  const connectionInstance = await mongoose.connect(process.env.MONGO_URL)
  if (connectionInstance) {
    console.log(`connected succesfully ${connectionInstance.connection.host}`)
  } else {
    console.log(`something went wrong while connecting to the backend`)
  }
}

module.exports = connectDB
