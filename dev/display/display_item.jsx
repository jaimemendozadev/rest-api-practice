import React, {Component} from 'react';

var DisplayItem = ({data}) => {
  //display students
  if (data["classes"]) {
      return (
        <div> 
          <p>{data["_id"]}: {data["name"]} </p>
          <p>{data["email"]}</p>
          <p>{data["classes"].length > 0 ? data["classes"] : "Student is not enrolled for any classes." }</p>
          <br />  
        </div>
      )
  //display teachers
  } else if (data["email"]) {
      return(
        <div> 
          <p>{data["_id"]}: {data["name"]}</p>
          <p>{data["email"]}</p>
          <br />  
        </div>
      )
  //display classes
  } else {
    return(
      <div> 
          <p>{data["_id"]}: {data["name"]}</p>
          <br />  
      </div>
    );  
  }

  

}

export default DisplayItem;