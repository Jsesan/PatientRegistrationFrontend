import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  image: string;
}

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/patient")
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {patients.map((p) => (
            <div key={p.id}>{p.name}</div>
          ))}
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
