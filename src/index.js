import React from "react";
import ReactDOM from "react-dom";
import Screen from "./Screen";
import Button from "./Button";
import Wireframe from "./Wireframe";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Screen />
      <table>
        <tr>
          <td>
            <Button symbol="1" />
          </td>
          <td>
            <Button symbol="2" />
          </td>
          <td>
            <Button symbol="3" />
          </td>
        </tr>
        <tr>
          <td>
            <Button symbol="4" />
          </td>
          <td>
            <Button symbol="5" />
          </td>
          <td>
            <Button symbol="6" />
          </td>
        </tr>
        <tr>
          <td>
            <Button symbol="7" />
          </td>
          <td>
            <Button symbol="8" />
          </td>
          <td>
            <Button symbol="9" />
          </td>
        </tr>
        <tr>
          <td>
            <Button symbol="0" />
          </td>
          <td>
            <Button symbol="+" />
          </td>
          <td>
            <Button symbol="=" />
          </td>
        </tr>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
