const express = require ('express');
const cors = require ('cors');

const port = 8000;

const {jokeRouter} = require ('./routes/joke.routes');

require('./config/mongoose.config');

//app is a fucntion
const app = express();

//app.use is middleware between req and response cycle.
//redirecting to another port
app.use(cors());

//req.body empty w/out this
app.use(express.json());

app.use('/api/jokes', jokeRouter);

app.listen(port, () => 
 console.log('listening on port ${port} for requests to respond to'));