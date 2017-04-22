import React, {Component} from 'react';

var NavBar = ({retrieveStudents, retrieveTeachers, retrieveClasses}) => {
  return (
    <nav>
      <ul>
        <li><a onClick={retrieveStudents} href="#">Retrieve Student Roster</a></li>
        <li><a onClick={retrieveTeachers} href="#">Retrieve Teacher Roster</a></li>
        <li><a onClick={retrieveClasses} href="#">Retrieve List of Classes</a></li>
      </ul>
    </nav>
  )

}

export default NavBar;