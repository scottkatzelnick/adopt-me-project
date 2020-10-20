const Pet = ({ name, animal, breed }) => {
  return React.createElement('Div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById('root'));
