import React, { useState } from 'react';
import NamePartners from './NamePartners';

function AddPartnerForm() {
  const [showPartners, setShowPartners] = useState(false);
  const [partnerData, setPartnerData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const [partners, setPartners] = useState([]);

  const handleChange = (e) => {
    setPartnerData({ ...partnerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (partnerData.id && partnerData.firstName && partnerData.lastName && partnerData.email) {
      addPartner(partnerData);

      setPartnerData({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
      });

      fetch('http://localhost:8080/api/partners')
      .then((response) => response.json())
      .then((data) => {
      
        console.log('Updated data:', data);
   
        setPartners(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    } else {
      console.log('Please fill in all fields');
    }
  };
  

  const addPartner = (partner) => {
    console.log('Adding partner:', partner);
    setPartners([...partners, partner]); 
    setShowPartners(true); 
  };

  return (
    <div>
      <h2>Add Partner</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={partnerData.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={partnerData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={partnerData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={partnerData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* {showPartners && <NamePartners partners={partners} />}  */}
    </div>
  );
}

export default AddPartnerForm;
