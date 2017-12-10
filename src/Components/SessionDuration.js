import React from 'react';

function SessionDuration(props){


return(
    <div className="session-container">
      <div className="minusBtn" onClick={props.minusSessionMinutes}> - </div>
        <div className="durationDiv"> {props.sessionMinutes} </div>
      <div className="plusBtn" onClick={props.addSessionMinutes}> + </div>
      <p className="text"> Session Duration </p>
    </div>

	);

}

export default SessionDuration;