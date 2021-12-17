const logger = require('../logger')
const fs = require("fs")
const {fileRepository: messages} = require('../constants/loggerMessages')

class FileRepository {
  getFileText() {
    logger.info(messages.GET_FILE_TEXT_INVOKE)
      function makeDirAndFile()
      {
          try {
              fs.mkdirSync('dir', {
              })
              fs.open('./dir/file', 'w', (err) => {
                  if(err) throw err;
                  logger.info(messages.FILE_CREATED)
                  openFile();
              });
          } catch (e) {
              console.log(e)
          }
      }

      function openFile()
      {
          try {

              return fs.readFileSync('./dir/file', 'utf8');
          } catch (e) {
              console.error(e)
          }
      }
        return fs.existsSync('./dir') ? openFile(): makeDirAndFile()
  }
    postCreateRecord(text) {
        fs.appendFileSync('./dir/file', text, (error) => {
            if (error) console.log(error);
        });
    }
}

module.exports = new FileRepository();
