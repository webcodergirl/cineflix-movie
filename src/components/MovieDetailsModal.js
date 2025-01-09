import React from 'react';
import { MdOutlineStar, MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from './CartContext';

const MovieDetailsModal = ({ isOpen, onClose, movie, onAddToCart }) => {

    const { handleAddToCart } = useCart();
  
    if (!isOpen || !movie) return null;
  return (
      // Movie details modal component

    <div className="fixed inset-0 bg-neutral-900 bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-[#1f2937] w-11/12 md:w-3/4 lg:w-1/2 rounded shadow-lg flex border border-[#2b3341] p-5 relative max-h-80 lg:max-h-full overflow-y-auto h-full lg:h-auto">
        <button
        onClick={onClose}
        className="absolute top-0 right-2 text-gray-600 hover:text-gray-200 text-3xl"
      >
        &times;
      </button>
       {/* Left: Movie Image */}
       <div className="w-1/2 space-y-3">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-auto object-cover rounded"
          />
            <button className="w-full px-4 py-2 bg-[#ffd62c] rounded hover:bg-[#ccc] flex items-center text-[#373b42] font-medium justify-center text-md" onClick={() => handleAddToCart(movie)}>
                <MdOutlineShoppingCart className="text-[#373b42] w-6 h-6 mr-1" />
                Add to Cart
            </button>
        </div>
        {/* Right: Movie Details */}
        <div className="w-1/2 pl-5">
            <h2 className="text-2xl font-medium text-[#f9fafb] mb-2">{movie.title}</h2>
            <div className='border-b border-b-[#2b3341] pb-2'>
                <div className="flex items-center justify-start text-md space-x-2 mb-2">
                    <p className='text-gray-400'>2023</p>
                    <span className="text-gray-600 text-5xl leading-[16px] self-start">·</span>
                    <p className="flex items-center text-gray-400">158 minutes</p>
                </div>          
                <div className="flex items-center justify-start text-md space-x-2 mb-2">
                    <p className='text-gray-400'>{movie.genre}</p>
                    <span className="text-gray-600 text-5xl leading-[16px] self-start">·</span>
                    <p className="flex items-center text-gray-400"><MdOutlineStar  className='text-gray-600 mr-1'/> {movie.rating}</p>
                    <span className="text-gray-600 text-5xl leading-[16px] self-start">·</span>
                    <p className='text-gray-400'>${movie.price}</p>
                </div>  
            </div>
            <div className='pt-2'>
                <p className='text-gray-400'>
                  {movie.desc}
                </p>
            </div>        
          
          </div>
        
      </div>
    </div>
  );
}

export default MovieDetailsModal;