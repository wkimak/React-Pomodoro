import React from 'react';

function BreakDuration(props){

return(
    <div className="break-container">
      <div className="minusBtn" onClick={props.minusBreakMinutes}> - </div>
        <div className="durationDiv"> {props.breakMinutes} </div>
      <div className="plusBtn" onClick={props.addBreakMinutes}> + </div>
      <p className="text"> Break Duration </p>
    </div>

	);

}

export default BreakDuration;