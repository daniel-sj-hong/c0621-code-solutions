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
    const list = [
      {
        title: 'HTML',
        text: 'ur cool'
      },
      {
        title: 'CSS',
        text: 'u suck'
      },
      {
        title: 'JavaScript',
        text: 'ur ok'
      }
    ];

    const { indexWindowOn } = this.state;
    const array = list.map((item, index) =>
    <div key={index}>
      <div className="header" onClick={() => { this.toggleOn(index); }}>
        {item.title}
      </div>
      <div className={ indexWindowOn === index ? 'body' : 'hidden'}>
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
