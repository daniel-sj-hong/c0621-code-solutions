import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleOn = this.handleOn.bind(this);
    this.handleOff = this.handleOff.bind(this);
  }

  handleOn() {
    this.setState({ isToggleOn: true });
  }

  handleOff() {
    this.setState({ isToggleOn: false });
  }

  render() {
    if (this.state.isToggleOn) {
      return <div className="border width background" onClick={this.handleOff}>
        <button className="button button-radius relative"></button>
        <label>ON</label>;
      </div>;
    }
    return <div className="border width" onClick={this.handleOn}>
      <button className="button button-radius"></button>
      <label>OFF</label>
      </div>;
  }
}

export default Toggle;
