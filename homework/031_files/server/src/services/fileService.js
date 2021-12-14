const fileRepository = require('../repositories/fileRepository')
const logger = require('../logger')
const format = require('string-format')
const { fileService: messages } = require('../constants/loggerMessages')

class fileService {
  getFileText(req, res) {
    logger.info(messages.GET_FILE_TEXT_INPUT_PARAMS)
      try {
        logger.info(format(messages.GET_FILE_TEXT_SUCCESS, 200, fileRepository.getFileText()))
        res.status(200).send(fileRepository.getFileText())
      }
      catch(error) {
        logger.info(format(messages.GET_FILE_TEXT_ERROR, 520, error))
        res.status(520).json(error)
      }
  }

  createRecord(req, res) {
    logger.info(format(messages.CREATE_FILE_INPUT_PARAMS, JSON.stringify(req.body))) // Логирование значимой части запроса
    fileRepository.postCreateRecord(req.body.text)
      try {
        res.status(200).send('File saved')
      }
      catch(error) {
        logger.info(format(messages.CREATE_FILE_ERROR, 520, error))
        res.status(520)
          .send(error)
      }
  }
}

module.exports = new fileService()
