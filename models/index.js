var schema = require('../schema.js');

module.exports = {
  teachers: {
    getAll: function(callback){

      schema.Teacher.find({}, function(err, teachers){
        if (err){
          callback(err, null);
        } 
        callback(null, teachers);
      }).sort({_id: 1});
    },
    
    getByID: function(teacherID, callback){
      schema.Teacher.findById(teacherID, function(err, teacher){
        if (err || teacher === null){
          callback(err, teacher)
        } else {
          callback(null, teacher);
        }
      });

    },

    postTeacher: function(newTeacher, callback){
      schema.Teacher.create(newTeacher, function(err, teacher){
        if (err){
          console.log("Sorry, couldn't save the teacher to the DB", err);
          callback(err, null);
        }

        callback(null, teacher);
      });

    }
  },

  students: {
    getAll: function(callback){

      schema.Student.find({}, function(err, students){
        if (err){
          callback(err, null);
        } 
        callback(null, students);
      }).sort({_id: 1});

      //.sort({_id: 1}) resorts unsorted collection
      //http://www.w3resource.com/mongodb/mongodb-sort-results.php

    },
    
    getByID: function(studentID, callback){
    
      schema.Student.findById(studentID, function(err, student){
        console.log("the student id is ", JSON.stringify(studentID))
        
        if (err || student === null){
          callback(err, student)
        } else {
          callback(null, student);
        }
      });

    },

    postStudent: function(newStudent, callback){
      
      schema.Student.create(newStudent, function(err, student){
        if (err){
          console.log("Sorry, couldn't save the student to the DB", err);
          callback(err, null);
        }

        callback(null, student);
      });
    },



    editStudentClasses: function(studentID, newSchedule, callback) {
      //do I still need these options? {upsert: true, new: true}
      schema.Student.findOneAndUpdate(studentID, newSchedule, {upsert: true, new: true}, function(err, updatedSchedule){
        

        if (err){
          console.log("Sorry, couldn't update student schedule.");
          callback(err, null);
        } else {
          callback(null, updatedSchedule);
        }
        
      });
    }
    
  },

  classSubj: {
    getAll: function(callback){
      schema.ClassSubj.find({}, function(err, classes){
        if (err){
          callback(err, null);
        } 
        callback(null, classes);
      }).sort({_id: 1})

    },

    getByID: function(classID, callback){
      schema.ClassSubj.findById(classID, function(err, foundClass){
        if (err || foundClass === null){
          callback(err, foundClass)
        } else {
          callback(null, foundClass);
        }
      });
    
    },

    postClass: function(newClass, callback) {

      schema.ClassSubj.create(newClass, function(err, newCreatedClass){
        if (err){
          console.log("Sorry, couldn't save the newly created class to the DB", err);
          callback(err, null);
        }

        callback(null, newCreatedClass);
      });
    }
  }
}



/*
/*


classes
{GET} /api/classes
Lists information for all classes
  Response
    success: BOOLEAN
    err    : STRING
    classes: ARRAY<{
      id  : INTEGER
      code: STRING
      name: STRING
    }>
{GET} /api/classes/:id
Lists information for one class
  Response
    success: BOOLEAN
    id     : INTEGER
    code   : STRING
    name   : STRING
    err    : STRING
{POST} /api/classes
Creates a class
  Expected Body
    code: STRING
    name: STRING
  Response
    success: BOOLEAN
    id     : INTEGER
    err    : STRING

*/
