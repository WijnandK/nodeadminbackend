const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');
const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
const fs = require('fs');


// papa.parse(file, {
//     worker: true, // Don't bog down the main thread if its a big file
//     step: function(result) {
//         // do stuff with result
//         DATA.push(result.data)       
//     },
//     complete: function(results, file) {    
//     }  
// });


// HERE ERROR HANDERLADERs
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  console.log(message)
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    "mongodb+srv://arAdmin:2020wearear@agruniek.tbu0i.mongodb.net/main?retryWrites=true&w=majority"
  )
  .then(result => {
    app.listen(5000);
  }).catch(err => console.log(err));
