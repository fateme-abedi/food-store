import React from 'react'
import { useCartStore } from '../store/shopStore';

const ShoppingCart: React.FC = () => {
    const cart = useCartStore(state => state.cart);
    const totoal = useCartStore(state => state.total);
    const removeFromCart = useCartStore(state => state.removeFromCart);
    console.log("shcart:" + JSON.stringify(cart));
    
console.log(cart.length);

    return (
        <div className='p-8 bg-gray-900 rounded-lg shadow-lg'>
            <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
            {
                cart.length === 0 ? <p>Your cart is empty</p> : (
                    <div className="cart-items">
                       {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                          <h3  className="text-lg">{item.name}</h3>
                          <p className="text-gray-600">Quantity: {item.quantity}</p>
                          <p className="text-gray-600">${item.price * item.quantity}</p>
                          <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">Remove</button>
                        </div>
                     ))}
                    </div>
                )
            }
         <div>
            <h3 className="text-lg font-semibold">Total : `${totoal}`</h3>
         </div>
        </div>
    )

}
export default ShoppingCart;