import React, { useState } from "react";
import { AiOutlineBell} from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from './CartContext';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const SwalAlert = withReactContent(Swal)


const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { cartItems, cartCount, totalAmount, removeFromCart  } = useCart();

    const handelCheckout = () =>{
        // SwalAlert.fire({
        //     text: "Coming Soon...",
        // });
        alert("Coming soon...")
        setIsCartOpen(false);
    }

    const handelContinueShopping = () =>{
        setIsCartOpen(false);
    }
    

     return (
        // Navbar component
        <nav className="fixed top-0 left-0 w-full shadow-md bg-[#111827] border-b border-b-[#1d2735]">
            <div className="container mx-auto lg:px-16 p-10 lg:max-w-full py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                <img 
                    src="/assets/images/logo.png"
                    alt="Logo" 
                    className="w-36" 
                />
                </div>

                {/* Cart */}
                <div className="flex items-center relative">
                    <button className="relative mx-2">
                        <AiOutlineBell className="text-gray-600 w-6 h-6" />
                    </button>

                    <button className="relative mx-2" onClick={() => setIsCartOpen(!isCartOpen)}>
                        <MdOutlineShoppingCart className="text-gray-600 w-6 h-6" />
                        {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#ffd62c] text-[#373b42] text-xs font-bold rounded-full px-1.5 py-0.5">
                            {cartCount}
                        </span>
                        )}
                    </button>

                    {isCartOpen && (
                    <div className="absolute top-5 right-10 mt-2 w-64 bg-[#1f2937] rounded max-h-80 overflow-y-auto border border-[#1d2735] shadow-lg px-3 pb-3">
                        {cartItems.length > 0 ? (
                        <div>
                            {/* cart item list */}
                            {cartItems.map((movie, index) => (
                            <div className="flex items-center justify-between border-b border-b-[#393939] w-full py-3" key={movie.id}>
                                <div className="flex items-center space-x-3">
                                    <img src={movie.image}
                                        alt={movie.title} 
                                        className="w-8 h-full object-cover rounded" />
                                    <div>
                                    <h3 className="text-sm text-[#eee] font-medium">{movie.title}</h3>
                                    <p className="text-gray-400 text-sm">${movie.price}</p>
                                    </div>
                                </div>
                                <button className="text-gray-500 hover:text-gray-200 text-lg" onClick={() => removeFromCart(movie)}>
                                    &times;
                                </button>
                            </div>
                            ))}
                            {/* cart item list end */}
                        

                        <div className="flex items-center justify-between border-b border-b-[#393939] w-full py-3">
                            <div>
                                <h3 className="text-sm text-gray-400">Number of movies</h3>
                                <p className="text-[#eee] font-medium text-md">{cartCount}</p>
                            </div>
                            <div className="text-right">
                                <h3 className="text-sm text-gray-400">Total Cost</h3>
                                <p className="text-[#eee] font-medium text-md">${totalAmount.toFixed(2)}</p>
                            </div>
                        </div>
                        
                        <div className="text-center space-y-3">
                            <button className="w-full px-4 py-2 bg-[#ffd62c] rounded hover:bg-[#ccc] flex items-center text-[#373b42] font-medium justify-center text-md" onClick={handelCheckout}>
                                <MdOutlineShoppingCart className="text-[#373b42] w-6 h-6 mr-1" />
                                Checkout
                            </button>
                            <button className="w-full px-4 py-2 text-white rounded-md hover:bg-[#ccc] hover:text-[#373b42] border border-[#374050] text-[#ccc] flex items-center font-medium justify-center text-md" onClick={handelContinueShopping}>
                                Continue Shopping
                            </button>
                        </div>
                        </div>
                        ):(
                            <p className="pt-3 text-center text-[#eee] font-medium text-md">Your cart is empty.</p>
                          )}
                    </div>
                    )}
                
                    <button className='mx-2'>
                        <FaRegCircleUser className="text-gray-600 w-6 h-6" />
                    </button>
                </div>
                
            </div>
        </nav>
  );
}

export default Navbar;
