import React, {Component} from 'react';
var axios = require('axios');
var helpers = require('../helpers');

class StudentFormCreation extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Enter Your Name",
      email: "Enter Your Email",
      classes: "Please Enter the Class Code"
    }

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleClasses = this.handleClasses.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleName(event) {
    console.log("the event is ", event.target.value);
    this.setState({
      name: event.target.value
    })
      
  }

  handleEmail(event) {
    console.log("the event is ", event.target.value);
    this.setState({
      email: event.target.value
    })
      
  }

  handleClasses(event){
    console.log("event for classes is ", event.target.value);


    this.setState({
      classes: event.target.value
    })

  }

  handleSubmit(event){
    event.preventDefault();

    var classSchedule = helpers.stripListCommaSpace(this.state.classes);

    var newStudent = {
      name: this.state.name,
      email: this.state.email,
      classes: classSchedule
    }

    

    
    axios.post('/api/students', newStudent)
    .then(function (response) {
      console.log(response);

    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
      name: "Enter Your Name",
      email: "Enter Your Email",
      classes: "Please Enter the Class Code" 
    });



  }

  render(){
    return(
      <div>  
      <h3>Student Form Creation - Create a New Student</h3>
      <form onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="name">Student Name</label>    
        <input onChange={this.handleName} value={this.state.name} id="name" type="text" name="name"></input>
      </div>
      <div>
        <label htmlFor="email">Student Email</label>
        <input onChange={this.handleEmail} value={this.state.email} type="text" name="email"></input>
      </div>
      <div>
        <label htmlFor="classes">Student Class Schedule</label>
        <input onChange={this.handleClasses} value={this.state.classes} type="text" name="classes"></input>

      </div>
      <button type="submit">Create New Student</button> 
      </form>
      
      </div>    
    )
  }
}

export default StudentFormCreation;