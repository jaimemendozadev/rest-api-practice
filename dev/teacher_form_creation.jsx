import React, {Component} from 'react';
var axios = require('axios');

class TeacherFormCreation extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Enter Your Name",
      email: "Enter Your Email" 
    }

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
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

  handleSubmit(event){
    event.preventDefault();
    var newTeacher = {
        name: this.state.name,
        email: this.state.email
    }
    
    axios.post('/api/teachers', newTeacher)
    .then(function (response) {
      console.log(response);

    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
      name: "Enter Your Name",
      email: "Enter Your Email" 
    });

  }

  render(){
    return(
      <div>  
      <h3>Teacher Form Creation - Create a New Student</h3>
      <form onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="name">Teacher Name</label>    
        <input onChange={this.handleName} value={this.state.name} id="name" type="text" name="name"></input>
      </div>
      <div>
        <label htmlFor="email">Teacher Email</label>
        <input onChange={this.handleEmail} value={this.state.email} type="text" name="email"></input>
      </div>
      <button type="submit">Create New Teacher</button> 
      </form>
      
      </div>    
    )
  }
}

export default TeacherFormCreation;