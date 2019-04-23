import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="buttonContainer">
        <h1>{this.props.symbol}</h1>
      </div>
    );
  }
}

export default Button;
