import {create} from 'zustand';
import L from 'leaflet';

export interface FoodItem {
    id: number;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
}
interface CartItem extends FoodItem {
     quantity: number;
}
interface CartState {
     cart: CartItem[];
     total: number;
     deliveryLocation: L.LatLng | null;
     addToCart:(item: FoodItem) => void;
     removeFromCart: (id: number) => void;
     setDeliveryLocation: (location: L.LatLng) => void;
     calculateTotal: () => void;
}

export const useCartStore = create<CartState>()((set, get) => ({
    cart: [],
    total: 0,
    deliveryLocation: null,
    addToCart: (item: FoodItem) => {
      const cart = get().cart;
      console.log("store: " + cart.length);
      
      const existingItem = cart.find(cartItem => cartItem.id === item.id);
      
      if(existingItem) {
        set({
            cart: cart.map(cartItem => 
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            )
        })
        
      }
      else {
        set({cart: [...cart, {...item, quantity: 1}]})
      }
      get().calculateTotal();
      console.log("store succ" + JSON.stringify(cart));
      
      
      
    },
    removeFromCart: (id: number) => {
        set({
            cart:get().cart.filter(itemCart => itemCart.id !== id)
        })
        get().calculateTotal();
    },
    setDeliveryLocation: (location: L.LatLng) => {
        set({deliveryLocation: location})
    },
    calculateTotal: () =>{
        const total = get().cart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0);
        set({total})
    }

  }));
  