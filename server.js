require('dotenv').config();
const express = require('express');
const Teams = require('./models/teams');
const methodOverride = require('method-override')
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

app.get('/todo', async (req,res) =>{
    try{
        let listOfTeams = await Teams.find({});
        res.render('home.ejs', {k: listOfTeams});
    } catch (err){
        res.status(400).json(err);
    }
})











app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})