import React from "react";

//Containers
import ScenariosList from "./containers/ScenariosList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <ScenariosList />
    </div>
  );
};

export default App;
