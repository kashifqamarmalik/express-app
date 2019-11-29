'use strict';
const express = require('express');
const app = express();
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const port = 3000;
const cors = require('cors');



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cors());
app.use('/cat', catRoute);
app.use('/user', userRoute); 


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
