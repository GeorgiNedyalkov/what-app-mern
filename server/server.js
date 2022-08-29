import express from "express"
import mongoose from "mongoose"

const app = express()
const port = 9000 || process.env.PORT

// middlewares

// DB config
const CONNECTION_URL = `mongodb+srv://gnedyalkov94:y1tQsElrqhydvS4t@cluster0.3xy7ihz.mongodb.net/whatsappdb?retryWrites=true&w=majority`

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// ????

// api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world")
})

// listener
app.listen(port, () => console.log(`Running on localhost:${port}`))
