const router = require('express').Router()
const fileRouter = require('./fileRouter')

router.use('/files', fileRouter)

module.exports = router
