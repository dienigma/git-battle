import React from "react";
import Header from "./Header";
import Compare from "./Compare";
class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Compare />
      </div>
    );
  }
}

export default App;
