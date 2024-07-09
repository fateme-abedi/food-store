import React from 'react';
import Header from '../components/Header';
import SubmitDelivey from '../components/SubmitDelivery';
import DeliveryMap from '../components/DeliveryMap';

const SubmitPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-1 p-8 border border-spacing-2">
        <h1 className='text-white font-bold bg-center text-center text-4xl'>Submit Your Address </h1>
        <div className="container mx-auto ">         
            <SubmitDelivey/>
            <DeliveryMap/>
        </div>
        <button className="bg-yellow-500 mt-12 ml-[10%] font-bold text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
            OK, send me delicious foods 
            </button>
        
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default SubmitPage;