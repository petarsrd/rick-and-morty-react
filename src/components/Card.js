import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.pressButton = this.pressButton.bind(this);
    this.state = { isBtnClicked: false };
  }

  pressButton() {
    this.setState({ isBtnClicked: !this.state.isBtnClicked });
  }

  render() {
    return (
      <>
        <div>
          <img
            src={this.props.karakter.image}
            onClick={() => {
              this.props.click(this.props.karakter);
            }}
          ></img>
          <h1>{this.props.karakter.name}</h1>
          <button
            onClick={this.pressButton}
            className={this.state.isBtnClicked ? "active" : ""}
          >
            {this.state.isBtnClicked ? "Unlike" : "Like"}
          </button>
        </div>
      </>
    );
  }
}

export default Card;
