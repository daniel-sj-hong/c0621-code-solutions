import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOn: false };
    this.toggleOn = this.toggleOn.bind(this);
    this.toggleOff = this.toggleOff.bind(this);
  }

  toggleOn() {
    this.setState({ isModalOn: true });
  }

  toggleOff() {
    this.setState({ isModalOn: false });
  }

  render() {
    const list = ['stress', 'endless anxiety', 'what is life', 'at least i tried'];
    const { toggleOff } = this;
    const array = list.map((anchorString, index) =>
      <li key={index}><a onClick={toggleOff} href="#" className="margin-right-20">{anchorString}</a></li>
    );

    let hideBG = '';
    let hideDrawer = '';
    if (!this.state.isModalOn) {
      hideBG = 'hidden';
      hideDrawer = 'hide-drawer';
    }

    return (
      <>
        <div onClick= {this.toggleOff} className={`background absolute ${hideBG}`}></div>
        <div className={`app-drawer absolute ${hideDrawer}`}>
          <h1 className="margin-top-0 margin-left-35">Adulting</h1>
          <ul className="padding-0">
            {array}
          </ul>
        </div>
        <i onClick= { this.toggleOn } className="fas fa-bars font-40 absolute left-5 top-15 z-index"></i>
      </>
    );
  }
}

export default Drawer;
