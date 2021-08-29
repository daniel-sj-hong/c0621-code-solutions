import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './accordian';

const list = [
  {
    key: '1',
    title: 'HTML',
    text: 'ur cool'
  },
  {
    key: '2',
    title: 'CSS',
    text: 'u suck'
  },
  {
    key: '3',
    title: 'JavaScript',
    text: 'ur ok'
  }
];

ReactDOM.render(
  <Accordian data={list} />,
  document.querySelector('#root')
);
