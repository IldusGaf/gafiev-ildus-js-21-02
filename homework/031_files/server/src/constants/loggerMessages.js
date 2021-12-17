module.exports = {
  fileService: {
    GET_FILE_TEXT_INPUT_PARAMS: '[fileService.getFileText] NO INPUT PARAMS',
    GET_FILE_TEXT_SUCCESS: '[fileService.getFileText] success status={} response={}',
    GET_FILE_TEXT_ERROR: '[fileService.getFileText] error status={} response={}',

    CREATE_FILE_INPUT_PARAMS: '[fileService.createRecord] INPUT PARAMS body={}',
    CREATE_FILE_SUCCESS: '[fileService.createRecord] success status={} response={}',
    CREATE_FILE_FAIL: '[fileService.createRecord] fail status={} response={}',
    CREATE_FILE_ERROR: '[fileService.createRecord] error status={} response={}',
  },
  fileRepository: {
    FILE_CREATED: '[fileRepository.getFileText.makeDirAndFile] file created',
    GET_FILE_TEXT_INVOKE: '[fileRepository.getFileText] invoke getFileText',
    GET_FILE_TEXT_REPLY_SUCCESS: '[fileRepository.getFileText] reply {}',
    GET_FILE_TEXT_REPLY_ERROR: '[fileRepository.getFileText] error {}',
    GET_FILE_TEXT_REPLY_RESULT: '[fileRepository.getFileText] result {}',
  },
}
