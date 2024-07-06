import React from 'react';
import Header from '../components/Header';
import SubmitDelivey from '../components/SubmitDelivery';
import DeliveryMap from '../components/DeliveryMap';

const SubmitPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-1 p-8 border border-spacing-2">
        <div className="container mx-auto ">         
            <SubmitDelivey/>
            <DeliveryMap/>
        </div>
        
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default SubmitPage;