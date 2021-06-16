import React from 'react';
import logo from '../../logo.svg';
import css from './App.module.scss';

const App:React.FC = () => (
  <div className={css.App}>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/App.tsx</code>
        {' '}
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React1
      </a>
    </header>
  </div>
);

export default App;
