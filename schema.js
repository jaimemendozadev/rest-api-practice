var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DBConnection = require('./db');
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(DBConnection);


var TeachersSchema = new Schema({
   name: String,
   email: String
});



var StudentsSchema = new Schema({
   name: String,
   email: String,
   classes: []
});

var ClassSubjSchema = new Schema({
   name: { type: String, required: true },
});





TeachersSchema.plugin(autoIncrement.plugin, 'Teacher');

StudentsSchema.plugin(autoIncrement.plugin, 'Student');

ClassSubjSchema.plugin(autoIncrement.plugin, 'ClassSubj');




var Teacher = mongoose.model('Teacher', TeachersSchema);
var Student = mongoose.model('Student', StudentsSchema);
var ClassSubj = mongoose.model('ClassSubj', ClassSubjSchema);


module.exports = {
  Teacher: Teacher,
  Student: Student,
  ClassSubj: ClassSubj
}
