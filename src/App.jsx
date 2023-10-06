import React from "react";
import ToDo from "./Components/ToDo";

class App extends React.Component {

  render() {
    const containerStyles = { width: "90%", margin: "auto" };
    return (
      <div style={containerStyles}>
        <h1>Hello React.js</h1>
        <ToDo count="5" urishCount="10" />
      </div>
    );
  }
}

export default App;
