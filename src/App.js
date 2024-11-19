import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="crud">Scaler</h1>
        <h3>CRUD Application</h3>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Create" element={<Create />}></Route>
            {/* <Route path="/Edit" element={<Edit/>}></Route> */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;