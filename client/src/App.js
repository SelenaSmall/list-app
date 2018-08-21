import React, { Component } from 'react';
import './App.css';
import { CookiesProvider } from 'react-cookie'
import TokenAuth from './components/auth/TokenAuth'

class App extends Component {
  render() {
    return (
      <div className="App">
          <CookiesProvider>
              <TokenAuth />
          </CookiesProvider>
      </div>
    );
  }

}

export default App;
