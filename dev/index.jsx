var axios = require('axios');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav_bar.jsx';
import Display from './display/index.jsx';
import ClassFormCreation from './class_form_creation.jsx';
import StudentFormCreation from './student_form_creation.jsx';
import TeacherFormCreation from './teacher_form_creation.jsx';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        display: []
      }
      this.retrieveStudents = this.retrieveStudents.bind(this);
      this.retrieveTeachers = this.retrieveTeachers.bind(this);
      this.retrieveClasses = this.retrieveClasses.bind(this);
    }

    retrieveStudents() {
      var self = this;

      axios.get('/api/students')
      .then(function (response) {
        

        self.setState({
          display: response["data"]
        })

      })
      .catch(function (error) {
        console.log(error);
      })

    }

    retrieveTeachers() {
      var self = this;

      axios.get('/api/teachers')
      .then(function (response) {
        

        self.setState({
          display: response["data"]
        })

      })
      .catch(function (error) {
        console.log(error);
      })
      
    }

    retrieveClasses() {
      var self = this;

      axios.get('/api/classes')
      .then(function (response) {
        

        self.setState({
          display: response["data"]
        })
      })
      .catch(function (error) {
        console.log(error);
      })
      
    }



    render(){
      return(
        <div>
          <h1>Welcome to the Angel Groove High School API</h1>
          <StudentFormCreation />
          <TeacherFormCreation />
          <ClassFormCreation />
          <NavBar retrieveTeachers={this.retrieveTeachers} retrieveStudents={this.retrieveStudents} retrieveClasses={this.retrieveClasses} />

          <Display displayData={this.state.display} />
        </div>
      )
    }
} 


ReactDOM.render(<App />, document.querySelector('.container'));