const app = require('./app');
const {host, port} = require('../config/serverConfig');

app.listen(port, host, () => console.log(`Server started at http://${host}:${port}`));
