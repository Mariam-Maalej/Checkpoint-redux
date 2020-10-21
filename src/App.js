import React from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";


function App() {
  return (
    <div className="App">
      <ListTask />
      <AddTask />
      
    </div>
  );
}

export default App;
