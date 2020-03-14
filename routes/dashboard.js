const express = require('express');
const router = express.Router();
var app = express();
const { ensureAuthenticated } = require('../db/auth.js');


var io = require('socket.io')(app.server);
io.on('connection', (socket)=>{
      console.log('ok');
 });
//exporting dashboard 
module.exports = {
  dash: router.get('/', (req,res)=>{
    res.render('dashboard');

    
  })
};


  
