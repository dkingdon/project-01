var mongoose = require("mongoose");
 mongoose.connect( process.env.MONGODB_URI || "connecting to heroku" );
// mongoose.connect("mongodb://localhost/project-01");
module.exports.Trail = require("./trail.js");
module.exports.UserComments = require("./userComments.js");
