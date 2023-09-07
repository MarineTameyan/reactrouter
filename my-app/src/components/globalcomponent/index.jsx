import React from "react";

class Globalcomponent extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.gname}</h3>
        <p>{this.props.gtext}</p>
      </div>
    );
  }
}

export default Globalcomponent;
