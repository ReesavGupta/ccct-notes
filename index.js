const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const mongoose = require('mongoose')

const connectDB = require('./db/conn.js')
const User = require('./models/user.schema.js')

// app.use is called a global muddleware
app.use(express.json())

// promises can either resolve or reject

connectDB()
  .then(() => {
    // console.log(data)
    console.log(`connected to mongoDB server succesfully`)
  })
  .catch((error) => {
    console.log(
      `there was an error while connecting to the db: ${error.message}`
    )
  })

app.get('/getAllUsers', async (req, res) => {
  // creating a new user in the db
  // const {name, roll} = req.body()

  const userData = {
    name: 'asldjasd',
    roll: 123,
  }
  const userCreated = await User.create(userData)

  if (userCreated) {
    res.send(`<h1>user has been created sucessfully</h1>`).status(200)
  } else {
    res.send(`<h1>user couldnt be created</h1>`).status(500)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port : ${process.env.PORT}`)
})
