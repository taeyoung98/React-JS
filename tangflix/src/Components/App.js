import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    // react rule: only 1 component return → Fragment
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
