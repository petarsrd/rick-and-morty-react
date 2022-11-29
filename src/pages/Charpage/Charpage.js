import React from "react";
import "./Chapage.css";

class Charpage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.karakter);
    return (
      <>
        <div className="dataCard">
          <h1>{this.props.karakter.name}</h1>
          <span>{this.props.karakter.species}</span>
          <span>{this.props.karakter.status}</span>
        </div>
      </>
    );
  }
}

export default Charpage;
