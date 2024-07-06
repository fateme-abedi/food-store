import {FoodItem} from '../store/shopStore'
import { useCartStore } from "../store/shopStore";

interface FoodItemProps {
    food:FoodItem
}

const FoodCard: React.FC<FoodItemProps> = ({food}) => {
    const addToCart = useCartStore(state => state.addToCart)

    return (
        <div key={food.id} 
        className="bg-gray-800 rounded-lg rounded-t-full shadow-md overflow-hidden center flex flex-col items-center mt-2">
            <div>
              <img src={food.imageUrl} alt={food.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="  p-4 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
              <p className="text-gray-400 mb-2">{food.description}</p>
              <p className="text-yellow-400 font-bold mb-4">${food.price}</p>
              <button 
                onClick={() => addToCart(food)} 
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
    )
}
export default FoodCard