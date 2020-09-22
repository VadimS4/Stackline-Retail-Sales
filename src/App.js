import React from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import SidePanel from './components/SidePanel';
import Graph from './components/Graph';
import Chart from './components/Chart';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    console.log(this.props.data)
    return (
      <div className="App">
        <Navbar />
        <div className="main-content">
          <div className="side-panel-main">
            <SidePanel />
          </div>
          <div className="analytics">
            <Chart />
            <Graph />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("map state to props", state)
  return {
    data: state[0]
  }
}

export default connect(mapStateToProps)(App);
