import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import ListsContainer from './components/ListsContainer';

class App extends Component {
    constructor(props) {
        super(props)
        this.getStuff = this.getStuff.bind(this)
    }

    getStuff () {
        alert('hello')
    }

    loggedIn() {
        return  !!localStorage.getItem("jwt")
    }

    login () {
        const email = $("#email").val()
        const password = $("#password").val()
        const request = {"auth": {"email": email, "password": password}}
        console.log(request)
        $.ajax({
            url: "http://localhost:3000/api/v1/user_token",
            type: "POST",
            data: request,
            dataType: "json",
            success: function (result) {
                console.log(result)
                localStorage.setItem("jwt", result.jwt)
            }
        })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React List</h1>
        </header>
          <form>
              <label htmlFor="email">Email: </label>
              <input name="email" id="email" type="email"/>

              <label htmlFor="password">Password:</label>
              <input name="password" id="password" type="password"/>
          </form>

          <button onClick={this.login}>Login</button>

          {this.loggedIn ? <ListsContainer jwt={localStorage.getItem("jwt")} /> : null}
      </div>
    );
  }

}

export default App;
