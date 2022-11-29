import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div
          onClick={() => {
            this.props.click(this.props.karakter);
          }}
        >
          <h1>{this.props.karakter.name}</h1>
          <img src={this.props.karakter.image}></img>
        </div>
      </>
    );
  }
}

export default Card;
