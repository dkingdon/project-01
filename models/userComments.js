var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var UserCommentsSchema = new Schema({
    name: String,
    comment: String
});

var UserComments = mongoose.model('UserComments', UserCommentsSchema);
module.exports = UserComments;
