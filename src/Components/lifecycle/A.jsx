// import React, { memo } from "react";

// function A() {
//   console.log("A Component");
//   return <h1>A Component</h1>;
// }

// export default memo(A);

class A extends React.PureComponent {
  componentWillUnmount() {
    console.log("A component will Unmount!!");
  }
  render() {
    console.log("A Component");
    return <h1>A Component</h1>;
  }
}

export default A;
