var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TrailSchema = new Schema({
  name: String,
  rating: Number,
  address: String,
  popularTrail: String,
  experienceLevel: String,
  latitude: Number,
  longitude: Number,
  comments: String
});

var Trail = mongoose.model('Trail', TrailSchema);
module.exports = Trail;
