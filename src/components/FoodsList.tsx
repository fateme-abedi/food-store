import {FoodItem} from '../store/shopStore'
import FoodCard from './FoodCard'
import food1 from '../assets/product_01.1.jpg'
import food2 from '../assets/product_08.jpg'
import food3 from '../assets/product_2.1.jpg'
import food4 from '../assets/product_3.1.jpg'
import food5 from '../assets/product_4.1.jpg'
import food6 from '../assets/product_4.2.jpg'

const foods: FoodItem[] = [
    { id: 1, name: 'Cake', price: 10,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" ,imageUrl: food1 },
    { id: 2, name: 'Pizza', price: 15,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" ,imageUrl:food2 },
    { id: 3, name: 'Burger', price: 12,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" ,imageUrl: food3 },
    { id: 4, name: 'Food Dish', price: 20,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" ,imageUrl: food4 },
    { id: 5, name: 'pasta', price: 45,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" ,imageUrl: food5 },
    { id: 6, name: 'rice', price: 50,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" ,imageUrl: food6 }
  ];

const FoodsList:React.FC= () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6 px-8 pt-6 mb-20'>
            {foods.map(food => (
                <FoodCard 
                 key = {food.id}
                 food={food}
                 />
            )
            )}
        </div>

    )

}
export default FoodsList