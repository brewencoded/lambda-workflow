import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
const endpoint = 'https://5doo2mhrmc.execute-api.us-east-1.amazonaws.com/dev/api';

class App extends Component {
    componentDidMount() {
        axios.get(endpoint, {})
            .then(response => console.dir(response))
            .catch(err => console.dir(err))
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
