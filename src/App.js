import React, { Component } from 'react';
import List from './containers/List';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <List />
      </div>
    );
  }
}

export default App;
