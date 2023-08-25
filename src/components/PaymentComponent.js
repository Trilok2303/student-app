import React, { useState } from 'react';
import './PaymentComponent.css'; // Import your CSS file for styling

const PaymentComponent = () => {
  const [collegeName, setCollegeName] = useState('');
  const [uniqueId, setUniqueId] = useState('');

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment</h2>
      <div className="login-button-div">
          <input
          type="text"
          className="input-field1"
          placeholder="College Name"
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
        />
      </div>
      
      <div className="login-button-div">
        <input
          type="text"
          className="input-field2"
          placeholder="Unique ID"
          value={uniqueId}
          onChange={(e) => setUniqueId(e.target.value)}
        />  
      </div>
      
      <div className="login-button-div"><button className="login-button">Login</button></div>
      
    </div>
  );
};

export default PaymentComponent;
