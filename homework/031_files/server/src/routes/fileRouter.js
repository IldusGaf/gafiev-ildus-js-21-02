const router = require('express').Router()
const fileService = require('../services/fileService')

router.get('/', fileService.getFileText)
router.post('/', fileService.createRecord)

module.exports = router
