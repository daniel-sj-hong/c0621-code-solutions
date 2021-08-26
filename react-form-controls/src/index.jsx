import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    console.log('state: ', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} id="form">
          Email<input onChange={this.handleChange} type="text"></input>
          <button>Sign Up!</button>
        </form>
      </>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
