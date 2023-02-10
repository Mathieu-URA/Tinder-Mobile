const home = require("./accueil")
const auth = require("./auth")
const config = require("./configuration")
const match = require("./matchs")


const router = require("express").Router()

router.use("/auth", auth)
router.use("/accueil", home)
router.use("/configuration", config)
router.use("/match", match)

module.exports = router