import React from "react";
import ToDo from "./Components/ToDo";

class App extends React.Component {

  render() {
    const containerStyles = { width: "90%", margin: "auto" };
    return (
      <div style={containerStyles}>
        <ToDo count="5" urishCount="10" />
      </div>
    );
  }
}

export default App;
