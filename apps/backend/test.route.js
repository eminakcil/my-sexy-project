const { Router } = require("express")

const LIST = [
  {
    title: "Works",
    emoji: "🦾",
  },
]

const router = Router()

router
  .route("/")
  .post((req, res) => {
    LIST.push(req.body)
    res.sendStatus(201)
  })
  .get((req, res) => {
    res.json(LIST)
  })

module.exports = router
