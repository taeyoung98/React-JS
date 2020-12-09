import React, { Component } from "react";
import Router from "Components/Router";
import Header from "Components/Header";

class App extends Component {
  render() {
    // react rule: only 1 component return → Fragment
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
