import express from "express"

const app = express()
const port = processs.env.PORT || 9000

// middlewares

// DB config

// ????

// api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world")
})

// listener
app.listen(port, () => console.log(`Running on localhost:${port}`))
