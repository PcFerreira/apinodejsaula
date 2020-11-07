const app = require('./express')();
const serverConfig = require('./config/server');

app.listen(serverConfig.webServerPort, () => {
  console.log(`Server running - Port: ${serverConfig.webServerPort}`);
});