

"use client"
import React, { useState, useEffect } from 'react';
import { Search, X, ChevronDown, Globe } from 'lucide-react';
import Logo from "@/assets/Logo.svg"
import Image from 'next/image';
  
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('EUR');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const currencies = ['EUR', 'USD', 'GBP', 'JPY', 'CAD'];
    

  // Suggestions de recherche simulées
  const mockSuggestions = [
    'iPhone 15 Pro',
    'MacBook Air M3',
    'AirPods Pro',
    'iPad Air',
    'Apple Watch Series 9',
    'Samsung Galaxy S24',
    'Dell XPS 13',
    'Sony WH-1000XM5',
    'Nintendo Switch',
    'PlayStation 5'
  ];

  
      useEffect(() => {
        if (searchQuery.length > 0) {
          const filtered = mockSuggestions.filter(item =>
            item.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setSearchSuggestions(filtered.slice(0, 6));
        } else {
          setSearchSuggestions([]);
        }
      }, [searchQuery]);
    
      const handleSearchSubmit = (e) => {
        if (e) e.preventDefault();
        console.log('Recherche:', searchQuery);
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchSuggestions([]);
      };
    
      const selectSuggestion = (suggestion) => {
        setSearchQuery(suggestion);
        setSearchSuggestions([]);
        console.log('Suggestion sélectionnée:', suggestion);
      };
    return (
        <nav className="relative z-50 px-4 py-4 border ">
        <div className="max-w-[1444px] mx-auto">
          {/* Desktop Navbar */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Logo"
              width={120}
              height={40}
              
              />
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-8">
              <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
                Accueil
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
                Produits
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
                Services
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
                Contact
              </a>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher des produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                  className="w-full pl-4 pr-10 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all"
                />
                <button
                  onClick={handleSearchSubmit}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-white/70 hover:text-white transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
              
              {/* Search Suggestions */}
              {searchSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => selectSuggestion(suggestion)}
                      className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors flex items-center space-x-2"
                    >
                      <Search className="h-4 w-4 text-gray-400" />
                      <span>{suggestion}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center space-x-2 px-3 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white hover:bg-white/30 transition-all"
              >
                <Globe className="h-4 w-4" />
                <span className="font-medium">{selectedCurrency}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCurrencyOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl z-50 min-w-[100px] overflow-hidden">
                  {currencies.map((currency) => (
                    <button
                      key={currency}
                      onClick={() => {
                        setSelectedCurrency(currency);
                        setIsCurrencyOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                        currency === selectedCurrency ? 'bg-gray-50 text-purple-600 font-medium' : 'text-gray-800'
                      }`}
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button className="px-6 py-2 bg-white text-purple-900 font-semibold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-lg">
              Commencer
            </button>
          </div>

          {/* Mobile Navbar */}
          <div className="lg:hidden flex items-center justify-between">
            {/* Menu Hamburger */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsSearchOpen(false);
              }}
              className="p-2 text-white hover:text-purple-200 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : 
              
              <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66669 15.1667H20.3334M1.66669 8.50001H20.3334M1.66669 1.83334H20.3334" stroke="#00171F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

}
            </button>

            {/* Logo */}
            <div className="flex-1 border justify-center items-center flex">
              <Image
              src={Logo}
              alt="Logo"
              width={120}
              height={40}
              
              />
              
            </div>

            {/* Search Icon */}
            <button
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                setIsMenuOpen(false);
              }}
              className="p-2 text-white hover:text-purple-200 transition-colors"
            >
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6771 21.061L18.4131 16.8283C20.0682 14.763 20.8698 12.1416 20.6529 9.5031C20.436 6.86457 19.2172 4.40946 17.2471 2.64261C15.277 0.875762 12.7054 -0.0685392 10.0609 0.00387725C7.41647 0.0762937 4.90025 1.15992 3.02965 3.03195C1.15904 4.90398 0.0762357 7.42211 0.0038743 10.0686C-0.0684871 12.715 0.875097 15.2886 2.64061 17.2602C4.40612 19.2318 6.85935 20.4515 9.49588 20.6686C12.1324 20.8856 14.7518 20.0835 16.8155 18.4271L21.045 22.6598C21.1519 22.7676 21.279 22.8531 21.419 22.9115C21.5591 22.9699 21.7093 23 21.861 23C22.0128 23 22.163 22.9699 22.303 22.9115C22.4431 22.8531 22.5702 22.7676 22.6771 22.6598C22.8842 22.4453 23 22.1587 23 21.8604C23 21.5621 22.8842 21.2755 22.6771 21.061ZM10.3679 18.4271C8.77668 18.4271 7.22122 17.9549 5.89819 17.0702C4.57516 16.1855 3.54398 14.928 2.93506 13.4569C2.32614 11.9857 2.16681 10.3668 2.47724 8.80501C2.78767 7.24321 3.5539 5.8086 4.67904 4.6826C5.80419 3.5566 7.23771 2.78979 8.79833 2.47912C10.3589 2.16846 11.9766 2.3279 13.4466 2.93729C14.9167 3.54668 16.1732 4.57864 17.0572 5.90267C17.9412 7.2267 18.4131 8.78335 18.4131 10.3757C18.4131 12.5111 17.5655 14.559 16.0567 16.0689C14.5479 17.5788 12.5016 18.4271 10.3679 18.4271Z" fill="#00171F"/>
</svg>

            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/20">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-white/90 hover:text-white py-3 font-medium border-b border-white/10">
                Accueil
              </a>
              <a href="#" className="block text-white/90 hover:text-white py-3 font-medium border-b border-white/10">
                Produits
              </a>
              <a href="#" className="block text-white/90 hover:text-white py-3 font-medium border-b border-white/10">
                Services
              </a>
              <a href="#" className="block text-white/90 hover:text-white py-3 font-medium border-b border-white/10">
                Contact
              </a>
              
              {/* Currency Selector Mobile */}
              <div className="py-3 border-b border-white/10">
                <button
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  className="flex items-center justify-between w-full text-white/90 hover:text-white font-medium"
                >
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <span>Devise: {selectedCurrency}</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCurrencyOpen && (
                  <div className="mt-3 ml-6 space-y-2">
                    {currencies.map((currency) => (
                      <button
                        key={currency}
                        onClick={() => {
                          setSelectedCurrency(currency);
                          setIsCurrencyOpen(false);
                        }}
                        className={`block py-2 transition-colors ${
                          currency === selectedCurrency 
                            ? 'text-purple-300 font-medium' 
                            : 'text-white/70 hover:text-white'
                        }`}
                      >
                        {currency}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button className="w-full px-6 py-3 bg-white text-purple-900 font-semibold rounded-full hover:bg-gray-100 transition-colors mt-6">
                Commencer
              </button>
            </div>
          </div>
        )}

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/20 p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher des produits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                className="w-full pl-4 pr-10 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all"
                autoFocus
              />
              <button
                onClick={handleSearchSubmit}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
            
            {/* Mobile Search Suggestions */}
            {searchSuggestions.length > 0 && (
              <div className="mt-3 bg-white rounded-lg shadow-xl overflow-hidden">
                {searchSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      selectSuggestion(suggestion);
                      setIsSearchOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors flex items-center space-x-2"
                  >
                    <Search className="h-4 w-4 text-gray-400" />
                    <span>{suggestion}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>
    );
};

export default Navbar