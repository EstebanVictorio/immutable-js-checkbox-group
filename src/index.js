import React from "react";
import ReactDOM from "react-dom";
import ICBGroup from "./icb-group";
window.onerror = function(e) {
  console.log(e);
};
function App() {
  return (
    <div className="App">
      <ICBGroup count={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
