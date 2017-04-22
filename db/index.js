//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://school_admin:school_admin@ds161950.mlab.com:61950/school-rest-api';
mongoose.connect(mongoDB);


//Get the default connection
var db = mongoose.connection;



db.on('connected', function(){
  console.log("Successfully connected to the DB.")
});

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;