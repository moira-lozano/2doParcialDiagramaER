'use strict'
const io = require('socket.io-client');
const socket = io.connect('http://3.130.22.116:9090');
console.log('socket cargado...');

module.exports =  {
    io,
    socket,
};