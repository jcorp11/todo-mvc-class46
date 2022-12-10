const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') // buscamos el controller

router.get('/', homeController.getIndex) 

module.exports = router