import React from 'react';

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = { indexWindowOn: null };
    this.toggleOn = this.toggleOn.bind(this);
  }

  toggleOn(index) {
    this.setState({ indexWindowOn: index });
    if (this.state.indexWindowOn === index) {
      this.setState({ indexWindowOn: null });
    }
  }

  render() {
    const { indexWindowOn } = this.state;
    const array = this.props.data.map(item =>
    <div key={item.key}>
      <div className="header" onClick={() => { this.toggleOn(item.key); }}>
        {item.title}
      </div>
      <div className={ indexWindowOn === item.key ? 'body' : 'hidden'}>
        {item.text}
      </div>
    </div>
    );

    return (
      <div>
        {array}
      </div>
    );
  }
}

export default Accordian;
