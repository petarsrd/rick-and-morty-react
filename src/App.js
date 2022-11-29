import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Charpage from "./pages/Charpage/Charpage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.goRight = this.goRight.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.setId = this.setId.bind(this);
    this.state = { data: [], page: 1, id: null };
  }

  setId = function (e) {
    this.setState({ id: e.id });
  };

  fetchData = function () {
    fetch("https://rickandmortyapi.com/api/character").then((res) =>
      res.json().then((data) => this.setState({ data: data.results }))
    );
  };

  goRight = function () {
    this.setState({ page: (this.state.page += 1) });
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
    ).then((res) =>
      res.json().then((data) => this.setState({ data: data.results }))
    );
  };

  goLeft = function () {
    this.setState({ page: (this.state.page -= 1) });
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
    ).then((res) =>
      res.json().then((data) => this.setState({ data: data.results }))
    );
  };

  render() {
    return (
      <>
        {this.state.id ? (
          <Charpage karakter={this.state.data[this.state.id]} />
        ) : (
          <Homepage
            fetching={this.fetchData}
            right={this.goRight}
            left={this.goLeft}
            podaci={this.state.data}
            nadjiId={this.setId}
          />
        )}
      </>
    );
  }
}

export default App;
