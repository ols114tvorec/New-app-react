import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    let myName = 'Vadim'; 
    return (
      <div className="App">
      <Header />
      <Sidebar />
      <Footer />
      
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello {myName}</h1>
          <p><h1>Опаньки!</h1></p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Уроки по React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
