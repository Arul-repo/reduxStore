import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import Counter from './containers/Counter/Counter';
import './App.css';


class App extends Component {
  render() {
    return (
      <Container className="App" >
        <Counter />
      </Container>
    );
  }
}

export default App;
