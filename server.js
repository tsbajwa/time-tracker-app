//require('babel-register') //Not required. Verify

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();

const DATA_FILE = path.join(__dirname, 'data.json');

app.set('port', (process.env.API_PORT || 3001));

// Middleware
app.use('/', express.static(path.join(__dirname, 'public')));  //serves static files
app.use(bodyParser.json());                                    //Parses the text as JSON and exposes to req.body
app.use(bodyParser.urlencoded({ extended: true }));            //tells the system deep parsing aloowed i.e deal with nested objects

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); //res(repsonse) is http response express app sends, after receiving request(req), so setting these headers each time
  res.setHeader('Pragma', 'no-cache');                                   //setHeader is node
  res.setHeader('Expires', '0'); 
  next();
});
//End Middleware

//app.get(path, callback, [callback]) req = requested data res = repsonse sent back
app.get('/api/timers', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {       //file path,callback. Two arguments (err, data). data is the contents of the file
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));                         //res.json same as res.send, but repsects more of the JSON formatting
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

