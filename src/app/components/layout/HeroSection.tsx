"use client"
import React, { useState } from 'react';
import Navbar from '../ui/Navbar';
import HeroRight from './HeroRight';
import HeroLeft from './HeroLeft';

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
    <div className="relative md:max-h-[85vh] xl:max-h-[83vh] overflow-hidden bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]">
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
      <div className="relative     max-w-[1444px]  mx-auto grid grid-rows-2 md:grid-cols-2 z-10   pt-10 px-4 xl:px-0">

        {/* LEFT CONTENT */}
      <HeroLeft/>

        {/* RIGHT CONTENT */}
        <HeroRight />
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