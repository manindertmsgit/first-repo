import React, { useEffect, useState } from 'react';

const Associates = () => {
  const [associates, setAssociates] = useState([]);

  useEffect(() => {
  
    fetch('http://localhost:8080/api/associates')
      .then(response => response.json())
      .then(data => setAssociates(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Associates</h2>
      {associates.map(associate => (
        <div key={associate.id}>
          <p>
            {associate.firstName} {associate.lastName} - {associate.email} [{associate.year}]
          </p>
        </div>
      ))}
    </div>
  );
};

export default Associates;
