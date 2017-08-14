const express = require('express')
const app = express()

app.set('port', (process.env.API_PORT || 3001));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});