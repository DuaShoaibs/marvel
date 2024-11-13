"use client";

import React, { useState, useRef, useEffect } from "react";
import Message from './components/Message';
import Image from "next/image";
import { FaShoppingCart, FaChevronLeft, FaChevronRight, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ name: string; price: number; image: string }[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // State to track whether music is playing
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev); // Toggle between play and pause
  };

  const products = [
    { name: 'Product 1', price: 20, image: '/wakandabb.png', description: 'WAKANDA MASK.' },
    { name: 'Product 2', price: 50, image: '/hoodieb.png', description: 'DOCTOR STRANGE PRINT T-SHIRT.' },
    { name: 'Product 3', price: 15, image: '/captainbb.png', description: 'ANTMAN MASK.' },
    { name: 'Product 4', price: 10, image: '/dead.png', description: 'HULK PRINT T-SHIRT.' },
    { name: 'Product 5', price: 25, image: '/hulkb.png', description: 'IRON MAN HELMET.' },
    { name: 'Product 6', price: 16, image: '/ringb.png', description: 'THOR HAMMER.' },
    { name: 'Product 7', price: 6, image: '/ironb.png', description: 'SPIDERMAN MASK.' },
    { name: 'Product 8', price: 18, image: '/iron2.png', description: 'CAPTAIN AMERICA SHIELD.' },
    { name: 'Product 9', price: 29, image: '/rugb.png', description: 'LOKI HELMET.' },
    { name: 'Product 1', price: 20, image: '/shirt.png', description: 'WAKANDA MASK.' },
    { name: 'Product 2', price: 50, image: '/thanosm.png', description: 'DOCTOR STRANGE PRINT T-SHIRT.' },
    { name: 'Product 3', price: 15, image: '/thanosh.png', description: 'ANTMAN MASK.' },
    { name: 'Product 4', price: 10, image: '/xman.png', description: 'HULK PRINT T-SHIRT.' },
    { name: 'Product 5', price: 25, image: '/loki black.png', description: 'IRON MAN HELMET.' },
    { name: 'Product 6', price: 16, image: '/captainring.png', description: 'THOR HAMMER.' },
    { name: 'Product 7', price: 6, image: '/blackant.png', description: 'SPIDERMAN MASK.' },
    { name: 'Product 8', price: 18, image: '/blackman.png', description: 'CAPTAIN AMERICA SHIELD.' },
    { name: 'Product 9', price: 29, image: '/thorr.png', description: 'LOKI HELMET.' },
  ];

  const itemsPerPage = 9;
  const pages = Math.ceil(products.length / itemsPerPage);

  const addToCart = (product: { name: string; price: number; image: string }) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + pages) % pages);
  };

  const displayedProducts = products.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div
      className="flex flex-col items-center min-h-screen overflow-hidden relative"
      style={{
        backgroundImage: "url('/bg5.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Audio Element */}
      <audio ref={audioRef} src="/Avengers.mp3" loop />

      {/* Music Controls */}
      <div className="absolute bottom-16 left-4 z-50">
        <button onClick={toggleMusic} className="text-gray-400 bg-black rounded-lg px-4 py-2">
          {isPlaying ? (
            <FaVolumeUp size={30} />
          ) : (
            <FaVolumeMute size={30} />
          )}
        </button>
      </div>

      {/* Sticker Images */}
      <div className="absolute top-96 left-0 z-10">
        <Image src="/dr strange.png" alt="Sticker" width={300} height={300} />
      </div>
      <div style={{ position: "absolute", top: "139px", left: "11", zIndex: 10 }}>
        <Image src="/spiderman.2.png" alt="Sticker" width={200} height={200} />
      </div>
      <div className="absolute top-48 left-2 z-10">
        <Image src="/falcon.png" alt="Sticker" width={400} height={400} />
      </div>
      <div className="absolute bottom-1/2 left-0 z-10">
        <Image src="/captainam.png" alt="Sticker" width={325} height={325} />
      </div>
      <div className="absolute bottom-1/2 right-24 z-20 -rotate-6">
        <Image src="/red.png" alt="Sticker" width={220} height={220} />
      </div>
      <div className="absolute top-60 right-20 z-0 -rotate-45">
        <Image src="/thor.png" alt="Sticker" width={450} height={450} />
      </div>
      <div className="absolute top-3/4 right-8 z-20 -rotate-45">
        <Image src="/light.png" alt="Sticker" width={260} height={260} />
      </div>
      <div className="absolute top-80 right-5 -rotate-12 z-10">
        <Image src="/hansel.png" alt="Sticker" width={250} height={250} />
      </div>
      <div className="absolute top-1/2 left-0 z-10 -rotate-12">
        <Image src="/waknda.png" alt="Sticker" width={350} height={350} />
      </div> 

      {/* Header */}
      <header className="bg-black text-white py-4 w-full">
        <nav className="container mx-auto flex justify-between items-center">
          <Image src="/marvel.jpg" alt="Website Icon" width={200} height={100} className="cursor-pointer" />
          <div className="flex items-center space-x-4 ml-auto">
            <span className="text-white bg-purple-600 rounded-lg px-4 py-2">Home</span>
            <span className="text-white bg-purple-600 rounded-lg px-4 py-2">About</span>
            <span className="text-white bg-purple-600 rounded-lg px-4 py-2">Contact</span>
            <div className="relative cursor-pointer" onClick={toggleCart}>
              <FaShoppingCart size={30} />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </div>
            
          </div>
        </nav>
      </header>
      
       <Message text=" ⚡🚨 Welcome to  my Marvel Website! 🚨⚡" />

      {/* Product Section */}

      <main className="flex flex-col items-center justify-center w-full mt-10 z-10">
     
          <div className="flame-border bg-black text-white bg-opacity-50 rounded-lg p-4 max-w-4xl flex flex-col items-center m-72">
  <h1 className="text-white text-4xl mb-4 text-pretty font-black">Products</h1>
  {/* Rest of your product section content */}


          <div className="flex justify-between w-full my-3">
            <button onClick={prevPage} className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md">
              <FaChevronLeft size={30} />
            </button>
            <button onClick={nextPage} className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md">
              <FaChevronRight size={30} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4">
            {displayedProducts.map((product, index) => (
              <div key={index} className="bg-black rounded-md shadow-lg p-2 flex flex-col items-center" style={{ maxWidth: '200px', height: '320px' }}>
                <div className="relative w-44 h-52 overflow-hidden group">
                  <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="object-cover rounded-md transition-transform duration-300 transform group-hover:scale-125" quality={100} />
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-white font-bold">{product.name}</h3>
                  <p className="text-white">{product.description}</p>
                  <p className="text-white">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 bg-purple-600 text-white px-4 py-2 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Cart Overlay */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-black p-4 rounded-lg w-full max-w-xs">
            <h2 className="text-white text-xl font-bold mb-2">Cart Items</h2>
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center text-white bg-gray-700 mb-2 px-4 py-2 rounded">
                    {item.name} - ${item.price}
                    <button onClick={() => removeFromCart(index)} className="text-red-500 ml-2">Remove</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white">Your cart is empty.</p>
            )}
            <button onClick={toggleCart} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
              Close Cart
            </button>
          </div>
        </div>
      )}
        {/* Footer */}
        <footer className="bg-black text-white py-4 text-center w-full relative">
        <div className="absolute inset-x-0 top-[-280px] -rotate-12 flex justify-center z-10">
          <Image src="/huulk.png" alt="Sticker" width={200} height={200} />
        </div>
        <p>© 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
      
    
export default Home;