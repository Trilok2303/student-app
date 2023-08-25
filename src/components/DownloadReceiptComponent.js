import React, { useState } from 'react';
import './DownloadReceiptComponent.css'; // Import your CSS file for styling

const DownloadReceiptComponent = () => {
  const [collegeName, setCollegeName] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const [sessionYear, setSessionYear] = useState('');

  return (
    <div className="download-receipt-container">
      <h2 className="download-receipt-title">Download Receipt</h2>
      <input
        type="text"
        className="input-field"
        placeholder="College Name"
        value={collegeName}
        onChange={(e) => setCollegeName(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        placeholder="Unique ID"
        value={uniqueId}
        onChange={(e) => setUniqueId(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        placeholder="Session Year"
        value={sessionYear}
        onChange={(e) => setSessionYear(e.target.value)}
      />
      <button className="login-button">Login</button>
    </div>
  );
};

export default DownloadReceiptComponent;
