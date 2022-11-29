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
    this.resetId = this.resetId.bind(this);
    this.state = { obj: {}, listOfChar: [], page: 1, id: null };
  }

  setId = function (e) {
    this.setState({ id: e.id });
  };

  resetId = function () {
    this.setState({ id: null });
  };

  fetchData = function () {
    this.setState({ page: 1 });
    fetch("https://rickandmortyapi.com/api/character").then((res) =>
      res.json().then((data) => {
        console.log(data.results);
        this.setState({ obj: data, listOfChar: data.results });
      })
    );
  };

  goRight = function () {
    this.setState({ page: (this.state.page += 1) });
    fetch(this.state.obj.info.next).then((res) =>
      res
        .json()
        .then((data) => this.setState({ obj: data, listOfChar: data.results }))
    );
  };

  goLeft = function () {
    this.setState({ page: (this.state.page -= 1) });
    fetch(this.state.obj.info.prev).then((res) =>
      res
        .json()
        .then((data) => this.setState({ obj: data, listOfChar: data.results }))
    );
  };

  render() {
    return (
      <>
        {this.state.id ? (
          <Charpage
            reset={this.resetId}
            karakter={
              this.state.listOfChar[
                this.state.id - 1 - (this.state.page - 1) * 20
              ]
            }
          />
        ) : (
          <Homepage
            fetching={this.fetchData}
            right={this.goRight}
            left={this.goLeft}
            podaci={this.state.listOfChar}
            nadjiId={this.setId}
          />
        )}
      </>
    );
  }
}

export default App;
