import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Scanner from './Containers/Scanner.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scanner />
      </div>
    )
  }
}

export default App
