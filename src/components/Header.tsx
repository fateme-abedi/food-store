import React, {useState} from "react"
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from "../store/shopStore";
const Header :React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cart=useCartStore(state => state.cart) 
    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }
    const quantityTotal = cart.reduce((acc, item) => 
      acc+ item.quantity,0
     )
console.log('header:' + cart.length);

    return (
        <header className="bg-gray-900 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
            <div className="text-2xl font-bold mr-auto">FoodShop</div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="hover:text-yellow-500">Home</a>
              <a href="/menu" className="hover:text-yellow-500">Menu</a>
              <a href="/service" className="hover:text-yellow-500">Service</a>
              <a href="/shop" className="hover:text-yellow-500">Shop</a>
            </nav>

            <a href="/cart" className="relative ml-auto mr-4 hover:text-yellow-500">
                   <FaShoppingCart size={34}/>
                   {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                     {quantityTotal}
                   </span>
                   }
                </a>
            
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                </button>
                
            </div>
            </div>
            {isOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="/" className="hover:text-yellow-500">Home</a>
            <a href="/menu" className="hover:text-yellow-500">Menu</a>
            <a href="/service" className="hover:text-yellow-500">Service</a>
            <a href="/shop" className="hover:text-yellow-500">Shop</a>
          </nav>
        </div>
      )}

        </header>
    )



}
export default Header