const express = require('express');
const Teams = require('../models/teams');
const router = express.Router();

router.get('/teams', async (req,res) =>{
    try{
        let listOfTeams = await Teams.find({});
        res.render('home.ejs', {teams: listOfTeams});
    } catch (err){
        res.status(400).json(err);
    }
})
router.get('/teams/new',(req, res)=> {
    res.render('new.ejs')
});

router.post('/teams', async (req,res) =>{
    try{
        req.body.yearCreated = Number(req.body.yearCreated);
        await Teams.create(req.body)
        res.redirect('/teams')
    }catch (err) {
        res.status(400).json(err);
    }
});
router.get('/teams/:id', async (req,res) =>{
    const selectedTeam = await Teams.findById(req.params.id);
    res.render('info.ejs', {team: selectedTeam})
});
router.put('/teams/:id', async (req,res) =>{
    try{
        req.body.yearCreated = Number(req.body.yearCreated);
        await Teams.findByIdAndUpdate(req.params.id,req.body)
        res.redirect('/teams')
    }catch (err) {
        res.status(400).json(err);
    }
});
router.delete('/teams/:id', async (req,res)=>{
    await Teams.findByIdAndDelete(req.params.id)
    res.redirect('/teams')
});

module.exports = router;