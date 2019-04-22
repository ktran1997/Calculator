import React, { Component } from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import KeypadComponent from "./KeypadComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
  }
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "" + "")
      })
    }
    catch (e) {
      this.setState({
        result: "error"
      })
    }
  };
  reset = () => {
    this.setState({
      result: ""
    })
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };
  onClick = button => {
    if(button === "=") {
      this.calculate()
    }
    else if(button === "C") {
      this.reset()
    }
    else if(button === "CE") {
      this.backspace()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }
  render() {
    return (
      <div>
        <div className = "calculator-body">
          <h1>Simple Calculator</h1>
          <ResultComponent result = {this.state.result}/>
          <KeypadComponent onClick = {this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
