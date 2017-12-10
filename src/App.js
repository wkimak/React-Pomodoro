
import React, { Component } from 'react';
import Header from './Components/Header';
import SessionDuration from './Components/SessionDuration';
import BreakDuration from './Components/BreakDuration';
import Timer from './Components/Timer';



class App extends Component {

constructor(props){
  super(props);

  this.state={
    sessionMinutes: 0,
    breakMinutes: 0,
  }

  this.incrementSession = this.incrementSession.bind(this);
  this.decrementSession = this.decrementSession.bind(this);
  this.incrementBreak = this.incrementBreak.bind(this);
  this.decrementBreak = this.decrementBreak.bind(this);
}

componentDidMount(){
  document.body.classList.add("default-background");
}

//Session duration event functions
incrementSession(){
  this.setState({
   sessionMinutes: this.state.sessionMinutes + 1,

  });
}

decrementSession(){
  if(this.state.sessionMinutes >= 1){
  this.setState({
   sessionMinutes: this.state.sessionMinutes - 1,
  });
}
}

//Break duration event functions
incrementBreak(){
  this.setState({
   breakMinutes: this.state.breakMinutes + 1,
  });
}

decrementBreak(){
  if(this.state.breakMinutes >= 1){
  this.setState({
   breakMinutes: this.state.breakMinutes - 1,
  });
}
}


//Main Application Render Method
  render() {

    return ( 

     <div>
     <Header title="Pomodoro Clock" />

     <div className = "container">
     
     <SessionDuration 
     addSessionMinutes={this.incrementSession}
     minusSessionMinutes={this.decrementSession}
     sessionMinutes={this.state.sessionMinutes} />
     
     <BreakDuration 
     addBreakMinutes={this.incrementBreak}
     minusBreakMinutes={this.decrementBreak} 
     breakMinutes={this.state.breakMinutes} />

     <Timer sessionMinutes={this.state.sessionMinutes} breakMinutes={this.state.breakMinutes} />

     </div>
     </div>
    
    );
  }
}

export default App;
