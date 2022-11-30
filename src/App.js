import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Charpage from "./pages/Charpage/Charpage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    // this.goRight = this.goRight.bind(this);
    // this.goLeft = this.goLeft.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.setId = this.setId.bind(this);
    this.resetId = this.resetId.bind(this);
    this.changePage = this.changePage.bind(this);
    this.state = {
      listOfChar: [],
      page: 1,
      id: null,
    };
  }

  setId = function (e) {
    this.setState({ id: e.id });
  };

  resetId = function () {
    this.setState({ id: null });
  };

  // fetchData = function (renderedPage = 1) {
  //   fetch(
  //     `https://rickandmortyapi.com/api/character?page=${renderedPage}`
  //   ).then((res) =>
  //     res.json().then((data) => {
  //       this.setState({ listOfChar: data.results });
  //     })
  //   );
  // };

  // goRight = function () {
  //   if (this.state.page === 42) {
  //     this.fetchData(1);
  //     this.setState({ page: 1 });
  //   } else {
  //     this.setState({ page: (this.state.page += 1) });
  //     this.fetchData(this.state.page);
  //   }
  // };

  // goLeft = function () {

  //   if (this.state.page === 1) {
  //     this.fetchData(42);
  //     this.setState({ page: 42 });
  //   } else {
  //     this.setState({ page: (this.state.page -= 1) });
  //     this.fetchData(this.state.page);
  //   }
  // };

  goToPrev = function () {
    if (this.state.page === 1) {
      this.setState({ page: 42 });
    } else {
      this.setState({ page: this.state.page - 1 });
    }
  };

  goToNext = function () {
    if (this.state.page === 42) {
      this.setState({ page: 1 });
    } else {
      this.setState({ page: this.state.page + 1 });
    }
  };

  fetchData = function () {
    fetch(
      `https://rickandmortyapi.com/api/character?page=${this.state.page}`
    ).then((res) =>
      res.json().then((data) => {
        this.setState({ listOfChar: data.results });
      })
    );
  };

  changePage = function (e) {
    this.setState({ page: e });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchData();
    }
  }

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
            // right={this.goRight}
            // left={this.goLeft}
            next={this.goToNext}
            prev={this.goToPrev}
            podaci={this.state.listOfChar}
            nadjiId={this.setId}
            curPage={this.state.page}
            changePage={this.changePage}
          />
        )}
      </>
    );
  }
}

export default App;
