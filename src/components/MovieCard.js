import React from 'react';
import { MdOutlineStar, MdOutlineShoppingCart } from "react-icons/md";

const MovieCard = ({ movie, onAddToCart, onViewDetails}) => {
  return (
        // Movie card component

    <div
    className='border border-[#111825] rounded-lg bg-[#0a101c] hover:bg-[#1f293799] hover:cursor-pointer'>
        <div className='card-img'>
            <img 
                src={movie.image}
                alt={movie.title}
                className="rounded-t-sm w-full object-cover" 
            />
        </div>
        <div className='card-body px-5 py-5'>
            <h2 className='text-[#eee] font-medium'>{movie.title}</h2>
            <div className="flex items-center justify-start text-md text-[#bbbdc2] space-x-2 mb-3 mt-1">
                <p className='text-gray-400'>{movie.genre}</p>
                <span className="text-gray-600 text-5xl leading-[16px] self-start">·</span>
                <p className="flex items-center text-gray-400"><MdOutlineStar  className='text-gray-600 mr-1'/> {movie.rating}</p>
                <span className="text-gray-600 text-5xl leading-[16px] self-start">·</span>
                <p className='text-gray-400'>${movie.price}</p>
            </div>
            <div className="flex space-x-2 justify-center">
                <button
                    onClick={() => onAddToCart(movie)}
                    className="w-full lg:px-4 md:px-1 px-2 py-2 bg-[#ffd62c] lg:text-md rounded hover:bg-[#ccc] flex items-center text-[#373b42] font-medium justify-center text-sm"
                    
                >
                <MdOutlineShoppingCart className="text-[#373b42] w-6 h-6 mr-1" />
                    Add
                </button>
                <button
                    onClick={() => onViewDetails(movie)}
                    className="w-full lg:px-4 md:px-1 px-2 py-2 text-white lg:text-md rounded-md hover:bg-[#ccc] hover:text-[#373b42] border border-[#374050] text-[#ccc] flex items-center font-medium justify-center text-sm"
                >
                    View details
                </button>
            </div>
        </div>
        
    </div>
  );
}

export default MovieCard;