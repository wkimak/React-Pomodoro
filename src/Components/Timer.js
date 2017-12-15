import React from 'react';


class Timer extends React.Component{

//Constructor, set initial states
constructor(props){
	super(props);

	this.state={
    time: this.props.sessionMinutes,
    sessionMinutes: this.props.sessionMinutes,
    breakMinutes: this.props.breakMinutes,
		seconds: 0,
    isSession: false,
    isDefault: true,
    running: false,
	}

  this.onTick = this.onTick.bind(this);
  this.onStart = this.onStart.bind(this);
  this.reset = this.reset.bind(this);
}


//start clock once button is clicked
componentDidMount(){
  this.onTickCount = setInterval(this.onTick, 125);
}


//pass new props to sessionMinutues and breakMinutes
componentWillReceiveProps(nextProps){
  if(this.props.sessionMinutes !== nextProps.sessionMinutes){
    this.state.sessionMinutes = nextProps.sessionMinutes - 1;
  }

  if(this.props.breakMinutes !== nextProps.breakMinutes){
    this.state.breakMinutes = nextProps.breakMinutes - 1;
  }
}


//Once component unmounts, stop clock
componentWillUnmount(){
clearInterval(this.onTickCount);
}


//Control how clock ticks, from sessionMinutes to breakMinutes
onTick(){


  if(this.state.running){
      this.setState({
        seconds: this.state.seconds - 1.
      });
    
    if(this.state.seconds === -1){
      this.setState({
        seconds: 60,
        time: this.state.time - 1,
      });

     if(this.state.isSession === true){
        this.setState({
        sessionMinutes: this.state.sessionMinutes - 1,
      });
      } else if(this.state.isSession === false){
        this.setState({
        breakMinutes: this.state.breakMinutes - 1,
        });
      } 
        
      }

    
    if(this.state.sessionMinutes === 0 && this.state.seconds === 0){
      if(this.props.breakMinutes > 0){
      this.setState({
        time: this.props.breakMinutes - 1,
        breakMinutes: this.props.breakMinutes - 1,
        sessionMinutes: this.props.sessionMinutes,
        seconds: 60,
        isSession: false,
      }); 

      document.body.classList.remove("session-background");
      document.body.classList.add("break-background");
    } else if(this.props.breakMinutes === 0){
      this.setState({
       time: this.props.sessionMinutes,
      });
    }
    }


   if(this.state.isSession == false){
    if(this.state.breakMinutes === 0 && this.state.seconds === 0){
      if(this.props.sessionMinutes > 0){
      this.setState({
         time: this.props.sessionMinutes - 1,
         sessionMinutes: this.props.sessionMinutes - 1,
         breakMinutes: this.props.breakMinutes,
         seconds: 60,
         isSession: true
      });
      document.body.classList.remove("break-background");
      document.body.classList.add("session-background");
    } else if(this.props.sessionMinutes === 0){
      this.setState({
        time: this.props.breakMinutes,
      });
    }
    }
  }
  }
}

//function that is run when "Start" btn is clicked
onStart(){
  if(this.props.sessionMinutes > 0){
  this.setState({
    running: true,
    isSession: true,
    isDefault: false,
    time: this.props.sessionMinutes - 1,
    seconds: 60,
  });
  document.body.classList.remove("default-background");
  document.body.classList.add("session-background");
}
}

//function that is run when "Reset" btn is clicked
reset(){
  this.setState({
    time: this.props.sessionMinutes,
    seconds: 0,
    running: false,
    isDefault: true,
    isSession: false,
  });

  if(this.state.isSession == true){
    document.body.classList.remove("session-background");
  } else{
    document.body.classList.remove("break-background");
  }

  document.body.classList.add("default-background");
}





//Main Render Method
render(){

/* Start/Reset Btn background colors */
var startBtnColor = {
  backgroundColor: "rgb(75,255,87)",
};

if(this.state.isSession){
var resetBtnColor = {
  backgroundColor: "rgb(255,200,50)",
}
} else{
  resetBtnColor = {
  backgroundColor: "rgb(255,41,41)",
}
}

//timer-container colors{
if(this.state.isSession){
  var ringStyle = {
    borderColor: "rgb(255,200,50)",
  }
} else if (this.state.isDefault){
   ringStyle = {
    borderColor: "rgb(75,255,87)",
   }
} else{
  ringStyle = {
    borderColor: "rgb(255,41,41)",
  }
}

console.log(this.state.time);
  return(
   <div style={ringStyle} className="timer-container">

      <div className="timer"> 
      {!this.state.running? this.props.sessionMinutes:this.state.time}
      :{this.state.seconds>=10?this.state.seconds:"0"+this.state.seconds}
       </div>
      
      {!this.state.running ?
      <button className="timerBtn" onClick = {this.onStart} style={startBtnColor}> Start </button>
        :
      <button className="timerBtn" style={resetBtnColor} onClick = {this.reset}> Reset </button>
       }
   </div>

  	);

}

}

export default Timer;
