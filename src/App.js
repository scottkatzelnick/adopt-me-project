import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Ellie',
      animal: 'Dog',
      breed: 'Golden Retriever',
    }),
    React.createElement(Pet, {
      name: 'LT',
      animal: 'Cat',
      breed: 'Black Cat',
    }),
    React.createElement(Pet, {
      name: 'Oliver',
      animal: 'Dog',
      breed: 'Mixed',
    }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
