import express from "express"
import mongoose from "mongoose"
import Messages from "./dbMessages.js"
import Pusher from "pusher"

const app = express()
const port = 9000 || process.env.PORT

const pusher = new Pusher({
  appId: "1470293",
  key: "7e64938c7a493470a29a",
  secret: "4f5fbb162b19fff7c033",
  cluster: "eu",
  useTLS: true,
})

// middlewares
app.use(express.json())

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

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

// listener
app.listen(port, () => console.log(`Running on localhost:${port}`))
