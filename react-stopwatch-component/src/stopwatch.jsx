import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      counter: 0
    };
    this.handleCounter = this.handleCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  handleCounter() {
    if (!this.state.isPlaying) {
      this.interval = setInterval(() => {
        this.setState(state => {
          return {
            counter: state.counter + 1,
            isPlaying: true
          };
        });
      }, 1000);
    } else {
      this.setState({ isPlaying: false });
      clearInterval(this.interval);
    }
  }

  resetCounter() {
    if (this.state.isPlaying === false) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    return (
      <>
        <div onClick={ this.resetCounter } className="circle border border-radius flex-center margin-0">
          <p className="font-30">{ this.state.counter }</p>
        </div>
        <div className="margin-0 flex-center margin-top-20">
          <i onClick={this.handleCounter} className={this.state.isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
        </div>
      </>
    );
  }
}

export default Stopwatch;
