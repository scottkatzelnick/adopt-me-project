import React from 'react';

export default function Pet({ name, animal, breed }) {
  return React.createElement('Div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
}
