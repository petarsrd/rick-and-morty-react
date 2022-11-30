import React from "react";

class Pagination extends React.Component {
  render() {
    let dugmici = [];
    if (
      this.props.curPage === 1 ||
      this.props.curPage === 2 ||
      this.props.curPage === 3
    ) {
      dugmici = [1, 2, 3, 4, 5];
    } else if (this.props.curPage === 42) {
      dugmici = [
        this.props.curPage - 4,
        this.props.curPage - 3,
        this.props.curPage - 2,
        this.props.curPage - 1,
        this.props.curPage,
      ];
    } else if (this.props.curPage === 41) {
      dugmici = [
        this.props.curPage - 3,
        this.props.curPage - 2,
        this.props.curPage - 1,
        this.props.curPage,
        this.props.curPage + 1,
      ];
    } else {
      dugmici = [
        this.props.curPage - 2,
        this.props.curPage - 1,
        this.props.curPage,
        this.props.curPage + 1,
        this.props.curPage + 2,
      ];
    }
    return (
      <>
        {console.log(dugmici)}
        <button onClick={this.props.prev}>Previous</button>
        {dugmici.map((e) => {
          return (
            <button
              onClick={() => this.props.changePage(e)}
              className={e === this.props.curPage ? "highlight" : ""}
            >
              {e}
            </button>
          );
        })}
        <button onClick={this.props.next}>Next</button>
      </>
    );
  }
}

export default Pagination;
