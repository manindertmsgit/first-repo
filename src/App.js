import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import NamePartners from './NamePartners';
import Associates from './Associates';
import Cases from './Cases';
import AddPartner from './AddPartner';

const App = () => {
  const [data, setData] = useState([]);
  const [showPartners, setShowPartners] = useState(false);
  const [partners, setPartners] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  const addPartner = (partner) => {
    setPartners([...partners, partner]);
  };

  const submitData = () => {
    const newData = {};
    setSubmittedData(newData);
  };

  const handleHomeButtonClick = () => {
    setShowPartners(true);
  };

  const handleAddPartnerClick = () => {
    setShowPartners(false);
  };

  useEffect(() => {
    fetch('http://localhost:8080/', { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/partners">
            <button onClick={handleHomeButtonClick}>Partners</button>
          </Link>
          <Link to="/associates">
            <button>Associates</button>
         </Link>
         <Link to="/cases">
            <button>Cases</button>
          </Link>
        </div>

        <Routes>
          <Route path="/partners" element={<NamePartners />} />
          <Route path="/associates" element={<Associates />} />
          <Route path="/cases" element={<Cases />} />

          <Route path="/" element={<NamePartners />} />
          <Route path="/add-partner" element={<AddPartner />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
