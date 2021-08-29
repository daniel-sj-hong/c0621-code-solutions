import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const list = [
  {
    image: '../dist/images/001.png'
  },
  {
    image: '../dist/images/004.png'
  },
  {
    image: '../dist/images/007.png'
  },
  {
    image: '../dist/images/025.png'
  },
  {
    image: '../dist/images/039.png'
  }
];

ReactDOM.render(
  <Carousel data={list} />,
  document.querySelector('#root')
);
