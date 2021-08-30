import React from 'react';

class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ password: event.target.value });
  }

  render() {
    let required = '';
    let hideText = '';
    let appear = '';
    if (this.state.password.length === 0) {
      required = 'Password is required.';
    } else if (this.state.password.length < 8) {
      required = 'Your password sucks.';
    } else {
      appear = 'fas fa-check checkmark';
      hideText = 'hidden';
    }

    return (
      <>
        <div>
          <label htmlFor="pwd">Password</label>
        </div>
        <div>
          <input onChange={this.handleChange} id="pwd" name="pwd" value={this.state.password} type="password"></input>
          <i className={`${appear}`}></i>
          <i className={`${hideText} fas fa-times x`}></i>
        </div>
        <div>
          <p className={`${hideText} red-text`}>{required}</p>
        </div>
      </>
    );
  }
}

export default Validate;
