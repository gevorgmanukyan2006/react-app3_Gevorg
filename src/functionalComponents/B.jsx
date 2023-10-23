import { useEffect } from "react";

const B = () => {
  useEffect(() => {
    console.log("ComponentDidMount");
    return ()=> {
        console.log("ComponentWillUnmount");
    }
  }, []);

  return <h1>Component B</h1>;
};

export default B;
