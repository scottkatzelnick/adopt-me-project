import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Ellie" animal="Dog" breed="Golden Retreiver" />
      <Pet name="LT" animal="Cat" breed="Black Cat" />
      <Pet name="Oliver" animal="Dog" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
