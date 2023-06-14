import React, { useEffect, useState } from 'react';

const Cases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
   
    fetch('http://localhost:8080/api/cases')
      .then(response => response.json())
      .then(data => setCases(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Cases</h2>
      {cases.map(singleCase => (
        <div key={singleCase.id}>
          <p>
            {singleCase.name} | Assigned To: {singleCase.assigned} | Date: {singleCase.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cases;
