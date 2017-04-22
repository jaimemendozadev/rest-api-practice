import React, {Component} from 'react';
var axios = require('axios');

class ClassFormCreation extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Enter the Class Name",
    }

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleName(event) {
    this.setState({
      name: event.target.value
    })
      
  }


  handleSubmit(event){
    event.preventDefault();

    var newClass = {
      name: this.state.name,
    }
    
    axios.post('/api/classes', newClass)
    .then(function (response) {
      console.log(response);

    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
      name: "Enter the Class Name"
    });

  }

  render(){
    return(
      <div>  
      <h3>Class Form Creation - Create a New Class</h3>
      <form onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="name">Class Name</label>    
        <input onChange={this.handleName} value={this.state.name} id="name" type="text" name="name"></input>
      </div>

      <button type="submit">Create New Class</button> 
      </form>
      
      </div>    
    )
  }
}

export default ClassFormCreation;