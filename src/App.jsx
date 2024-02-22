
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import "./App.css"
const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<ShowList/>} />
          <Route path="/show/:id" element={<ShowSummary/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
