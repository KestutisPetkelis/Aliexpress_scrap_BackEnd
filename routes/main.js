const express = require('express')
const router = express.Router()

const {getproduct} =  require("../controllers/main")

router.post("/getproduct",  getproduct)

module.exports = router