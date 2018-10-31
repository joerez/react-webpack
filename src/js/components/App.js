import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Dashboard from './Dashboard';

class App extends Component {
    render () {
      return (
        <div>
          <h1>Wow</h1>
          <Dashboard />
        </div>
      )
    }
};


ReactDOM.render(<App />, document.getElementById('root'))
export default App
