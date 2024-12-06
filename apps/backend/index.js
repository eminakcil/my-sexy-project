const express = require("express")
const mongoose = require("mongoose")

const testRoute = require("./test.route")

const app = express()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/myproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.get("/", (req, res) => {
  res.send("Backend çalışıyor!")
})

app.use("/test", testRoute)

app.listen(3001, () => {
  console.log("Backend 3001 portunda çalışıyor!")
})
