import React from "react";
import Header from "./Header";
import Compare from "./Compare";
import User from "./User";
const axios = require("axios");

class App extends React.Component {
  state = {
    userOneName: "",
    userTwoName: ""
  };

  handleChangeOne = e => {
    this.setState({
      userOneName: e.target.value
    });
  };
  handleChangeTwo = e => {
    this.setState({
      userTwoName: e.target.value
    });
  };

  fetchRepos = username => {
    var encodedURI = window.encodeURI(
      "https://api.github.com/search/users?q=" + username
    );
    return axios.get(encodedURI).then(function(response) {
      console.log(response);
      return response.data.items;
    });
  };

  handleCompare = () => {
    const resOne = this.fetchRepos(this.state.userOneName);
    const resTwo = this.fetchRepos(this.state.userTwoName);
    console.log(resOne);
    console.log(resTwo);
  };

  render() {
    return (
      <div>
        <Header />
        <User
          handleChangeOne={this.handleChangeOne}
          handleChangeTwo={this.handleChangeTwo}
        />
        <Compare handleCompare={this.handleCompare} />
      </div>
    );
  }
}

export default App;
