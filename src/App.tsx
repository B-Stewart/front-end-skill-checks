import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { CounterProject } from "./projects/counter";
import { ThermometerProject } from "./projects/thermometer";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/counter" element={<CounterProject />} />
      <Route path="/projects/thermometer" element={<ThermometerProject />} />
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
          <Link to="/projects/counter">1. Counter (Events)</Link>
        </div>
        <div>
          <Link to="/projects/thermometer">2. Thermometer (APIs)</Link>
        </div>
      </nav>
    </div>
  );
}
