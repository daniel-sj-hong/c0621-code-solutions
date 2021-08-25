import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    if (this.state.clickCount < 3) {
      return <button className="font-white padding violet" onClick={this.handleClick}>Hot Button</button>;
    }
    if (this.state.clickCount < 6) {
      return <button className="font-white padding purple" onClick={this.handleClick}>Hot Button</button>;
    }
    if (this.state.clickCount < 9) {
      return <button className="font-white padding pink" onClick={this.handleClick}>Hot Button</button>;
    }
    if (this.state.clickCount < 12) {
      return <button className="font-white padding orange" onClick={this.handleClick}>Hot Button</button>;
    }
    if (this.state.clickCount < 15) {
      return <button className="font-black padding yellow" onClick={this.handleClick}>Hot Button</button>;
    }
    return <button className="font-black padding white " onClick={this.handleClick}>Hot Button</button>;
  }
}

export default HotButton;
