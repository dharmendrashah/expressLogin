const express = require('express');
const router = express.Router();
var app = express();
const { ensureAuthenticated } = require('../db/auth.js');

var http = require('http').createServer(app);
var io = require('socket.io')(http);

//exporting dashboard 
module.exports = {
  dash: router.get('/', (req,res)=>{
    res.render('dashboard');

    io.on('connection', (socket)=>{
      console.log('ok');
    })
  })
};


  