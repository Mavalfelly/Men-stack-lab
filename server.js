require('dotenv').config();
const express = require('express');
const Teams = require('./models/teams');
const methodOverride = require('method-override')
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
app.get('/teams', async (req,res) =>{
    try{
        let listOfTeams = await Teams.find({});
        res.render('home.ejs', {teams: listOfTeams});
    } catch (err){
        res.status(400).json(err);
    }
})
app.get('/teams/new',(req, res)=> {
    res.render('new.ejs')
});

app.post('/teams', async (req,res) =>{
    try{
        req.body.yearCreated = Number(req.body.yearCreated);
        await Teams.create(req.body)
        res.redirect('/teams')
    }catch (err) {
        res.status(400).json(err);
    }
});
app.get('/teams/:id', async (req,res) =>{
    const selectedTeam = await Teams.findById(req.params.id);
    res.render('info.ejs', {team: selectedTeam})
});
app.put('/teams/:id', async (req,res) =>{
    try{
        req.body.yearCreated = Number(req.body.yearCreated);
        await Teams.findByIdAndUpdate(req.params.id,req.body)
        res.redirect('/teams')
    }catch (err) {
        res.status(400).json(err);
    }
});
app.delete('/teams/:id', async (req,res)=>{
    await Teams.findByIdAndDelete(req.params.id)
    res.redirect('/teams')
});

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
});