import React from "react";
import "./Charpage.css";

class Charpage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.karakter);
    return (
      <>
        <div className="wrap">
          <div className="dataCard">
            <button onClick={this.props.reset}>Go back</button>
            <img src={this.props.karakter.image}></img>
            <h1>{this.props.karakter.name}</h1>
            <div className="info">
              <span>{this.props.karakter.gender}</span>
              <span>{this.props.karakter.species}</span>
              <span>{this.props.karakter.location.name}</span>
              <span>{this.props.karakter.status}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Charpage;
