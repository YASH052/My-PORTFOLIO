const express = require('express')
const { sendEmailController } = require('../controllers/portfoliocontroller')

//router object

const router = express.Router()

router.post('/sendEmail', sendEmailController);

module.exports = router;