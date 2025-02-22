// write the component code here
import React from 'react';
import PropTypes from 'prop-types';


const Usercard = ({ user }) => {
  return (
    <div className="user-card">      
      <h2 className="user-card__name">{user.name}</h2>
      <p className="user-card__email">{user.email}</p>
      <p className="user-card__phone">{user.phone}</p>
      <p className="user-card__address">{user.address}</p>
    </div>
  );
};

Usercard.propTypes = {
  user: PropTypes.shape({    
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default Usercard;

