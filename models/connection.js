require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DBLINK);

mongoose.connection
    .on('open', ()=> console.log('conected'))
    .on('close', ()=> console.log('disconected'))
    .on('error', (err)=> console.log('error', err));

module.exports = mongoose