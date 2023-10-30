import React, { createContext, useState } from "react";
import ToDo from "./Components/ToDo";
import SingleTask from "./Components/singleTask/SingleTask";
// import A from "./functionalComponents/A";
import { Route, Routes } from "react-router-dom";
export const ContextProvider = createContext();

const App = () => {
  const [num, setNum] = useState(5);
  const [loadin, setLoading] = useState(5);
  const contextValue = {
    num,
    setNum,
    loadin,
    setLoading,
  };

  const containerStyles = { width: "90%", margin: "auto" };
  return (
    <div style={containerStyles}>
      <ContextProvider.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/singleTask/:id" element={<SingleTask />} />
        </Routes>
      </ContextProvider.Provider>
      {/* <A /> */}
    </div>
  );
};

export default App;
