import React from "react";
import A from "./A";

class Lifecycle extends React.Component {
  //   constructor() {
  //     super();
  //     console.log("constructor");
  //   }
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
    //   const h1 = document.getElementById("h1");
    //   console.log(h1, "h11111");
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
