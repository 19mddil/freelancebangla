import React from 'react';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App" style={{ backgroundColor: 'whitesmoke' }}>
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;
