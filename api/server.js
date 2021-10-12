const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require('cors');
const app = express();
app.use(cors())
const port = process.env.PORT;
app.use(bodyParser.urlencoded({extended: false}));
// parse request data content type application/json
app.use(bodyParser.json());
// define root route
app.get('/', (req, res)=>{
    res.send('API is working');
});
const usersRoutes = require('./routes/api');

app.use('/api/v1/user', usersRoutes);
 
// listen to the port
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});