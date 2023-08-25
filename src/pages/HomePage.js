import React, { useState } from 'react';
import PaymentComponent from '../components/PaymentComponent';
import DownloadReceiptComponent from '../components/DownloadReceiptComponent';
import LoginComponent from '../components/LoginComponent';
import TermsAndConditionsComponent from '../components/TermsAndConditionsComponent';
import Header from '../components/Header/Header';
import './HomePage.css'
import Footer from '../components/Footer/Footer';
const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState('pay');

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'downloadReceipt':
        return <div className='DownloadReceiptComponent'>
            <DownloadReceiptComponent />
          </div>;
      default:
        return <div className='PaymentComponent'>
            <PaymentComponent />
          </div>;
    }
  };

  return (
    <div>
      <div>
        <div className='Header'>
            <Header />
        </div>
        <div className='button-container1' >
              <div className='buttons'>
                <button className='Paybutton' onClick={() => setActiveComponent('pay')}>Pay</button>
                <button className='Download_Receipt' onClick={() => setActiveComponent('downloadReceipt')}>Download Receipt</button>
              </div>
            </div>
        <div className='Footer'>
            <Footer />
        </div>
        
      </div>
      {renderActiveComponent()}
    </div>
  );
};

export default HomePage;
