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
        <div className="main">
          <div className="buttons">
            <button onClick={this.props.fetching}>Get Cards</button>
            <button onClick={this.props.left}>L</button>
            <button onClick={this.props.right}>R</button>
          </div>

          <div className="card-wrapper">
            {this.props.podaci.map((e) => {
              return <Card click={this.props.nadjiId} karakter={e} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
