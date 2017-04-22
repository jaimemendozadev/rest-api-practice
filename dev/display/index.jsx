import React, {Component} from 'react';
import DisplayItem from './display_item.jsx';

var Display = ({displayData}) => {


    if (displayData.length == 0) {
      return <h2>Waiting for data...</h2>;
    } else {
      return(
          <div>
              { displayData.map( (data) => {
          console.log("each data is ", data);
          return <DisplayItem key={data._id} data={data} />
        })}

          </div>
      )
       
        

      
      
    }

}

export default Display;