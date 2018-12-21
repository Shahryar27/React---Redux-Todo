import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todocode from './components/Todocode';
import Listcode from './components/listcode'

class App extends Component {
  // constructor(props){
  //   super(props);
    
  // }
  render() {
    return (
      <div className="App">

          <h1 className="App-title">SIMPLE TODO APP </h1>
        
        {/* <Addtodo/> */}
        <Todocode />
       <Listcode/> 
      </div>
    );
  }
}

export default App;
