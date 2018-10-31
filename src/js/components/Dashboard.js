import React, { Component } from 'react'

import DashContainer from './DashContainer';

class Dashboard extends Component {
  render() {
    return (
      <div>
        React Dashboard
        <DashContainer text="great" />
      </div>
    )
  }
}

export default Dashboard;
