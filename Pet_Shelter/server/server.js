require('./config/mongoose.config');

const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const {petRouter} = require('./routes/pet.routes');
const modelName = "pet"  

app.use(`/api/${modelName}s`, petRouter)

const port = 8000;
app.listen(port, () => console.log(`Listening on port:  ${port}`))