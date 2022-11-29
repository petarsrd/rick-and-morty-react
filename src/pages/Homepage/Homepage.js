import React from "react";
import Card from "../../components/Card";

import "./Homepage.css";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="buttons">
          <button onClick={this.props.fetching}>Fecuj me</button>
          <button onClick={this.props.left}>Go Left</button>
          <button onClick={this.props.right}>Go Right</button>
        </div>

        <div className="card-wrapper">
          {this.props.podaci.map((e) => {
            return <Card click={this.props.nadjiId} karakter={e} />;
          })}
        </div>
      </>
    );
  }
}

export default Homepage;
