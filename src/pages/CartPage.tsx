import React from 'react';
import Header from '../components/Header';
import Cart from '../components/ShoppindCart';

const CartPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-1 p-8 bg-gray-100">
        <div className="container mx-auto ">
          <Cart />
          <button className="bg-gray-900 mt-6 mx-auto text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
            <a href='/submit' >
            submit delivery
            </a>
            </button>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default CartPage;