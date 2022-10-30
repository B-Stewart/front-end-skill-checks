import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { CounterProject } from "./projects/counter";
import { CardUI } from "./projects/card-ui";
import { ThermometerProject } from "./projects/thermometer";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/counter" element={<CounterProject />} />
      <Route path="/projects/thermometer" element={<ThermometerProject />} />
      <Route path="/projects/card-ui" element={<CardUI />} />
    </Routes>
  );
};

function Home() {
  return (
    <div className="App">
      <main>
        <h1>Skill Tests</h1>
      </main>
      <nav>
        <div>
          <Link to="/projects/counter">1. Counter (JS Events)</Link>
        </div>
        <div>
          <Link to="/projects/thermometer">2. Thermometer (API)</Link>
        </div>
        <div>
          <Link to="/projects/card-ui">3. Card UI (CSS)</Link>
        </div>
      </nav>
    </div>
  );
}
