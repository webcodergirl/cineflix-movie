import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImSpinner8 } from "react-icons/im";
import MovieDetailsModal from './MovieDetailsModal';
import { useCart } from './CartContext';
import movies from '../movies.json';

const MovieList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { handleAddToCart } = useCart();

  const handelLoadMore = () =>{
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        console.log("Movies loaded successfully!");
      }, 5000);
  }
  
  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = (movie) =>{
    setIsModalOpen(false);
    setSelectedMovie(null);
  }

  
  return (
    // Movie list component
    <div className='container lg:max-w-full mx-auto lg:px-16 px-10 min-h-screen py-8 pt-[5.5rem]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
      <div className="flex justify-center mt-12 mb-4">
            <button
                className="px-8 py-3 text-white rounded-md hover:bg-[#ccc] hover:text-[#373b42] border border-[#374050] text-[#bbbdc2] text-md flex items-center"
                onClick={handelLoadMore}
            >
                {loading ? (
            <>
              Loading movies
              <ImSpinner8 className="animate-spin ml-2 text-[#ffd62c]" />
            </>
          ) : (
            "Load more movies"
          )}
            </button>
      </div>
      {/* Movie details modal open */}
      <MovieDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} movie={selectedMovie} />
    </div>
  );
}

export default MovieList;