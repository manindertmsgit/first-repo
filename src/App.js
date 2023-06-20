import React, { useState, useEffect } from 'react';
import NamePartners from './NamePartners';
import Associates from './Associates';
import AddPartner from './AddPartner';
// import Cases from './Cases';

function App() {
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
    <div className="App">
      <div>
        <button onClick={handleHomeButtonClick}>Home</button>
        {showPartners && <NamePartners />}
        
        <button onClick={handleAddPartnerClick}>Add Partner</button>
        {showPartners || <AddPartner onSubmit={submitData} />}
      </div>

      <h2>HELLO WORLD</h2>
      <h1>WELCOME WORLD!!</h1>

      {/* <Associates />
      <Cases /> */}

      <ul>
        {!data ? (
          'loading...'
        ) : (
          <li key={data.data}>{data.data}</li>
        )}
      </ul>
      
    </div>
  );
}

export default App;
