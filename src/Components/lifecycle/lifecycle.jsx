import React from "react";
import A from "./A";

class Lifecycle extends React.Component {
  state = {
    count: 0,
    bool: true,
  };
  render() {
    console.log("render");
    return (
      <>
        <h1 id="h1">lifecycle Component</h1>
        {this.state.bool && <A />}
      </>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ count: 1, bool: false });
    }, 2000);
  }

  componentDidUpdate() {
    if (this.state.bool) {
      this.setState({ count: this.state.count + 1 });
    }
    console.log("componentDidUpdate");
  }
}

export default Lifecycle;
