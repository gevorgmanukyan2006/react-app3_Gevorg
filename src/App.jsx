import React, { createContext, useState } from "react";
import ToDo from "./Components/ToDo";
import SingleTask from "./Components/singleTask/SingleTask";
import { Route, Routes } from "react-router-dom";
import Form_func from "./Components/Form/Form";
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
          <Route path="/form" element={<Form_func />} />
        </Routes>
      </ContextProvider.Provider>
    </div>
  );
};

export default App;
