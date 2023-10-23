import React from "react";
import ToDo from "./Components/ToDo";
// import A from "./functionalComponents/A";
class App extends React.Component {
  render() {
    const containerStyles = { width: "90%", margin: "auto" };
    return (
      <div style={containerStyles}>
        <ToDo />
        {/* <A /> */}
      </div>
    );
  }
}

export default App;
