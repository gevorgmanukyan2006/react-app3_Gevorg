import React from "react";
import ToDo from "./Components/ToDo";
// import Lifecycle from "./Components/lifecycle/lifecycle";

class App extends React.Component {
  render() {
    const containerStyles = { width: "90%", margin: "auto" };
    return (
      <div style={containerStyles}>
        <ToDo />
        {/* <Lifecycle /> */}
      </div>
    );
  }
}

export default App;
