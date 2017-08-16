
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

//Get timers
app.get('/api/timers', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  })
})
//Add new timer
app.post('/api/timers', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const timers = JSON.parse(data);
    const newTimer = { 
      title: req.body.title,
      project: req.body.project,
      id: req.body.id,
      elapsed: 0,
      runningSince: null,
    };
    timers.push(newTimer);
    fs.writeFile(DATA_FILE, JSON.stringify(timers), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json({})                                 
    })
  })
})

//Timer Deleted
app.delete('/api/timers', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const currentTimers = JSON.parse(data);
    const timers = currentTimers.filter((timer) => req.body.id !== timer.id);
    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.json({});       //With fetch exception thrown if server responds success no content, so need to send back empty data
    })
  })
})

// Timer updated
app.put('/api/timers', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const timers = JSON.parse(data);
    timers.forEach((timer) => {
      if (timer.id === req.body.id) {
        timer.title = req.body.title;
        timer.project = req.body.project;
      }
    })
    fs.writeFile(DATA_FILE, JSON.stringify(timers), () => {
      res.json({})
    })
  })
})
//Start timer
app.post('/api/timers/start', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const timers = JSON.parse(data);
    timers.forEach((timer) => {
      if (timer.id === req.body.id) {
        timer.runningSince = req.body.start;
      }
    });
    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.json({});
    });
  });
});
//Stop timer
app.post('/api/timers/stop', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    const timers = JSON.parse(data);
    timers.forEach((timer) => {
      if (timer.id === req.body.id) {
        const delta = req.body.stop - timer.runningSince;
        timer.elapsed += delta;
        timer.runningSince = null;
      }
    });
    fs.writeFile(DATA_FILE, JSON.stringify(timers, null, 4), () => {
      res.json({});
    });
  });
});


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

