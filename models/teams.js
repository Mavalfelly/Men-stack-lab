const mongoose = require('./connection.js');

const TeamsSchema = new mongoose.Schema({
    teamName: String,
    city: String,
    state: String,
    yearCreated: Number,  
    sport: String,
    submitedBy: String, 
});
const Teams = mongoose.model('teams', TeamsSchema);
module.exports = Teams