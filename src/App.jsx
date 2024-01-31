import react from "react";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Route path="/" Component={HomePage} exact />
      </div>
      <div>
        <Route path="/" Component={DashBoard} exact />
      </div>
    </>
  );
}

export default App;
