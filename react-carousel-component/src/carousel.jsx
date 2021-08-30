import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      id: null
    };
    this.arrowRight = this.arrowRight.bind(this);
    this.arrowLeft = this.arrowLeft.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  handleCircle(index) {
    this.setState({ counter: index, image: this.props.data[index].image });
    this.refresh();
  }

  arrowRight() {
    this.setState({ counter: this.state.counter + 1 }, () => {
      if (this.state.counter < this.props.data.length) {
        this.setState({ image: this.props.data[this.state.counter].image });
      }
      if (this.state.counter === this.props.data.length) {
        this.setState({ counter: 0, image: this.props.data[0].image });
      }
    });
    this.refresh();
  }

  arrowLeft() {
    this.setState({ counter: this.state.counter - 1 }, () => {
      if (this.state.counter === -1) {
        this.setState({ image: this.props.data[this.props.data.length - 1].image, counter: this.props.data.length - 1 });
      } else {
        this.setState({ image: this.props.data[this.state.counter].image });
      }
    });
    this.refresh();
  }

  refresh() {
    clearInterval(this.state.id);
    const id = setInterval(() => {
      this.arrowRight();
    }, 3000);
    this.setState({ id });
  }

  componentDidMount() {
    const id = setInterval(() => {
      this.arrowRight();
    }, 3000);
    this.setState({ id });
  }

  render() {
    const circles = this.props.data.map((data, index) => {
      return (
        <div key={index} className="col-fifth center-all">
          <i id={index} onClick={() => this.handleCircle(index)} className={`${this.state.counter === index ? 'fas' : 'far'} fa-circle`}></i>
        </div>
      );
    });

    return (
      <>
        <div className="container center">
          <div className="row">
            <div className="col-10 center-all">
              <i onClick={this.arrowLeft} className="fas fa-arrow-left font-40"></i>
            </div>
            <div className="col-80 center-all">
              <img src={this.state.image} />
            </div>
            <div className="col-10 center-all">
              <i onClick={this.arrowRight} className="fas fa-arrow-right font-40"></i>
            </div>
          </div>
          <div className="row center-all">
            {circles}
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
