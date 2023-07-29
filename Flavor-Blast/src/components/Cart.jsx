import { useDispatch, useSelector } from "react-redux"
import { CartItems } from "./CartItems";
import { clearCart } from "./utils/cartSlice";

export const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="text-orange-400 p-4 m-2 font-bold shadow-md rounded-lg hover:bg-slate-50"
             onClick={handleClearCart}
            >Clear Cart</button>

            {cartItems.length===0 && <h1>Cart is Empty Please add some delicious food</h1>}

            <div className="w-6/12 m-auto"> 
                <CartItems items={cartItems}/>
            </div>
        </div>
    )
}