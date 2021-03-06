var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// Comments = require("./comments.js");

var TrailSchema = new Schema({
    name: String,
    trailCode: String,
    rating: Number,
    address: String,
    popularTrail: String,
    experienceLevel: String,
    latitude: Number,
    longitude: Number,
    comments: [String]
});

var Trail = mongoose.model('Trail', TrailSchema);
module.exports = Trail;
