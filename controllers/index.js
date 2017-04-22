var model = require('../models');

module.exports = {
    teachers: {
      getAll: function(req, res) {

        model.teachers.getAll(function(err, teachers){
          if(err){
            console.log("Sorry, couldn't process your request");
            res.send("Sorry, couldn't process your request")
          }

          res.status(200).json(teachers);
        });
      },

      getByID: function(req, res) {
        var teacherID = req.params.id;

        model.teachers.getByID(teacherID, function(err, teacher){
          if (err || teacher === null){
            console.log("Sorry, couldn't find the teacher ", err);
            res.send("Sorry, couldn't find the teacher");
          } else {
            res.status(200).json(teacher);
          } 
        });
      },



      postTeacher: function(req, res) {
        var newTeacher = {name: req.body.name, email: req.body.email};
        console.log("the new teacher is ", newTeacher);

        model.teachers.postTeacher(newTeacher, function(err, teacher){
          if (err){
            console.log("Sorry, couldn't create a new teacher ", err);
            res.send("Sorry, couldn't create a new teacher ");
          }

          res.send(teacher);

        });
    
          
      }
    //end teachers controllers
  },

  students: {
    getAll: function(req, res) {

      model.students.getAll(function(err, students){
        if (err){
          console.log("Sorry, couldn't find the students", err);
          res.send("Sorry, couldn't find the students");
        }

        res.status(200).json(students);
      });

    },

    getByID: function(req, res) {
      var studentID = req.params.id;
    
      model.students.getByID(studentID, function(err, student){
        if (err || student === null) {
          res.send("Sorry, student doesn't exist in the database");
        } else {
          res.json(student);
        }

      });
    },

      postStudent: function(req, res) {
        var newStudent = {
          name: req.body.name, 
          email: req.body.email,
          classes: req.body.classes 
        };

        
        model.students.postStudent(newStudent, function(err, student){
          if (err){
            console.log("Sorry, couldn't create a new student ", err);
            res.send("Sorry, couldn't create a new student ");
          }

          res.send(student);

        });
    
          
      },

      editStudentClasses: function(req, res) {
        //why is it {_id: idNum} instead of {id: idNum} ?
        var studentID = {_id: req.params.id};
        var newSchedule = {classes: req.body.classes};

        

        model.students.editStudentClasses(studentID, newSchedule, function(err, updatedSchedule) {
          if (err){
            console.log("Sorry, couldn't update the student's schedule.");
            res.send("Sorry, couldn't update the student's schedule.");
          } else {
            res.send(updatedSchedule);

          }
        });

      }
  //end students controllers
  },

  classes: {
    getAll: function(req, res){

      model.classSubj.getAll(function(err, classes){
        if (err){
          console.log("Sorry, couldn't find the classes", err);
          res.send("Sorry, couldn't find the classes");
        }

        res.status(200).json(classes);
      });
    },


    getByID: function(req, res) {
      var classID = req.params.id;
    
      model.classSubj.getByID(classID, function(err, foundClass){
        if (err || foundClass === null) {
          res.send("Sorry, class doesn't exist in the database");
        } else {
          res.json(foundClass);
        }

      });
    
    },

    postClass: function(req, res) {


      var newClass = {name: req.body.name};
      console.log("newClass is ", newClass);

      

      model.classSubj.postClass(newClass, function(err, newCreatedClass){
        if (err){
          console.log("Sorry, the new class entry couldn't be saved to the Database.");
          res.send("Sorry, the new class entry couldn't be saved to the Database.");
        }

        res.json(newCreatedClass);
      });



    }

  //end classes controllers
  }

}
