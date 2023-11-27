import config from './config'
import mongoose from 'mongoose'
import app from './app'

async function main() {
  try {
    await mongoose.connect(config.database_url)
    console.log('Connected to mongodb')
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    app.listen(config.port, () => {
      console.log(`Assignment 2 is running on http://localhost:${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main().catch((err) => console.log(err))
