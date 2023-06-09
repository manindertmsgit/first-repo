import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const NamePartners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/partners' , {mode: 'cors'}) 
      .then(response => response.json())
      .then(data => setPartners(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Name Partners</h2>
      {partners.map(partner => (
        <div key={partner.email}>
          <p>{partner.firstName} {partner.lastName} - {partner.email}</p>
        </div>
      ))}
       <Link to="/add-partner">
        <button>Add Partner</button>
      </Link>
    </div>
  );
};

export default NamePartners;
