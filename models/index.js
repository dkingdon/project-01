var mongoose = require("mongoose");
 mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/project-01" );
// mongoose.connect("mongodb://localhost/project-01");
module.exports.Trail = require("./trail.js");
module.exports.UserComments = require("./userComments.js");
