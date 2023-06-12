import React, { Component } from 'react';

export class Time extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
    // date: new Date().toDateString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="Clock__face">
        {`${new Date().toDateString()}  -  `}
        {this.state.time}
      </div>
    );
  }
}
