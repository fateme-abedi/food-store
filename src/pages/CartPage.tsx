import React from 'react';
import Header from '../components/Header';
import Cart from '../components/ShoppindCart';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-1 p-8 bg-gray-900">
        <div className="container mx-auto ">
          <Cart />
          <button className="bg-yellow-500 mt-6 mx-auto text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
           <Link to='/submit'>
            submit delivery
           </Link>
            </button>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default CartPage;