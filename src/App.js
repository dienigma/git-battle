import React from "react";
import Header from "./Header";
import Compare from "./Compare";
import User from "./User";
import Winner from "./Winner";
const axios = require("axios");

class App extends React.Component {
  state = {
    userOneName: "",
    userTwoName: "",
    dataOne: "",
    dataTwo: "",
    scoreOne: "",
    scoreTwo: "",
    winner: ""
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

  fetchRepos = async username => {
    const url = `https://api.github.com/search/users?q=${username}`;

    return await axios.get(url).then(response => response.data.items[0]);
  };

  handleCompare = e => {
    e.preventDefault();
    const resOne = this.fetchRepos(this.state.userOneName).then(data =>
      this.setState({ dataOne: data, scoreOne: data.score })
    );
    const resTwo = this.fetchRepos(this.state.userTwoName).then(data =>
      this.setState({ dataTwo: data, scoreTwo: data.score })
    );
  };

  check = () => {
    if (this.state.scoreOne > this.state.scoreTwo) {
      this.setState({
        winner: this.state.dataOne.login
      });
    } else {
      this.setState({
        winner: this.state.dataTwo.login
      });
    }
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
        <Winner
          dataone={this.state.dataOne}
          dataTwo={this.state.dataTwo}
          scoreOne={this.scoreOne}
          scoreTwo={this.scoreTwo}
        />
      </div>
    );
  }
}

export default App;
