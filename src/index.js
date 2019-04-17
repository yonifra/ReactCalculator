import React from "react";
import ReactDOM from "react-dom";
import Screen from "./Screen";
import Button from "./Button";
import Wireframe from "./Wireframe";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Wireframe>
        <Screen />
        <Button />
      </Wireframe>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
