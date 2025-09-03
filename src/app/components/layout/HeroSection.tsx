"use client"
import React, { useState } from 'react';
import Navbar from '../ui/Navbar';
import HeroRight from './HeroRight';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);


  const closeAllDropdowns = () => {
    setIsCurrencyOpen(false);
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <div className="relative max-h-[83vh]  overflow-hidden bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]">
      {/* Hero Background */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 "></div>
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative bg-red-500   border max-w-[1444px]  mx-auto grid grid-rows-2 md:grid-cols-2 z-10   pt-10 px-4 xl:px-0">

        {/* LEFT CONTENT */}
        <div className=" border  h-screen pt-32 ">
          <h1 className="text-heading-bold-60 text-primary-dark80 font-bold mb-6 leading-tight">
          One more friend
            <span className="block text-heading-bold-46 text-primary-dark80 ">
            Thousands more fun!
                        </span>
          </h1>

          <div className='text-start'>
          <p className="text-body-medium-16 text-neutral-80 mb-12 max-w-3xl">
          Having a pet means you have more joy, a new friend, a happy <br />
           person who will always be with you to have fun. We have 200+ <br />
            different pets that can meet your needs!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl text-lg">
              Explorer les Produits
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all duration-300 text-lg">
              En Savoir Plus
            </button>
          </div>

          {/* Hero Stats */}
         
        </div>

        {/* RIGHT CONTENT */}
        <HeroRight />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Overlay pour fermer les dropdowns */}
      {(isCurrencyOpen || isMenuOpen || isSearchOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeAllDropdowns}
        />
      )}


      {/* DECORS SVG */}



      <div className=" absolute -top-[0px] w-[914px] h-[914px] ">
        <svg width="478" height="116" viewBox="0 0 478 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-64.3297" y="-697" width="635" height="635" rx="99" transform="rotate(25.23 -64.3297 -697)" fill="#F7DBA7" />
        </svg>

      </div>

      <div className="hidden lg:block absolute -bottom-[820px] left-[80px] w-[914px] h-[914px] ">
        <svg width="751" height="93" viewBox="0 0 751 93" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.4" x="438.334" y="-38" width="635" height="635" rx="99" transform="rotate(56.47 438.334 -38)" fill="#F7DBA7" />
        </svg>

      </div>
    </div>
  );
};

export default HeroSection;