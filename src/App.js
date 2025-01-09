import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import MovieList from './components/MovieList';
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <div>
      <CartProvider>
        <Navbar />
        <main className='bg-[#030712] min-h-screen'>
          <MovieList />
        </main>
        </CartProvider>
      </div>
    </div>
  );
}

export default App;
  