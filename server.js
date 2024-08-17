require('dotenv').config();
const express = require('express');
const Teams = require('./models/teams');
const methodOverride = require('method-override');
const teamsRouter = require('./controllers/controller');
const app = express();
//////////////////////////////////////////////
//////// Middles: Section          //////// 
///////////////////////////////////////////////
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
//////////////////////////////////////////////
//////// Routes: Section          //////// 
///////////////////////////////////////////////
app.use('/',teamsRouter)

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
});