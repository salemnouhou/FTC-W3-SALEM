

"use client"
import React, { useState, useEffect } from 'react';
import { Search, X, ChevronDown, Globe } from 'lucide-react';
import Logo from "@/assets/Logo.svg"
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('VND');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const currencies = ['VND', 'EUR', 'USD', 'GBP', 'JPY', 'CAD'];


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
        <nav className="relative z-50 px-4 py-4  ">
            <div className="max-w-[1444px] mx-auto">
                {/* Desktop Navbar */}
                <div className="hidden lg:flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={120}
                            height={40}

                        />
                    </Link>

                    {/* Navigation Links */}
                    <div className="lg:flex hidden space-x-4  md:space-x-8  xl:space-x-20 ">
                        <a href="#" className="text-primary hover:text-primary-dark60 transition-colors text-body-bold-16">
                            Home
                        </a>
                        <a href="#" className="text-primary hover:text-primary-dark60   transition-colors text-body-bold-16">
                            Category
                        </a>
                        <a href="#" className="text-primary hover:text-primary-dark60   transition-colors text-body-bold-16">
                            About
                        </a>
                        <a href="#" className="text-primary hover:text-primary-dark60   transition-colors text-body-bold-16">
                            Contact
                        </a>
                    </div>

                    <div className='flex gap-4 '>
                        {/* Search Bar */}
                        <div className="relative  flex ">

                           

                            <div className="relative w-[180px]  xl:w-[280px]">


                                <span className="absolute z-50 left-[10px] top-1/2 transform -translate-y-1/2 text-white/70">
                                    <svg
                                        width="15"
                                        height="20"
                                        viewBox="0 0 18 18"
                                        fill=""  // 👈 hérite de text-white/70
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.0916 15.9083L14 12.8417C15.2001 11.3454 15.7812 9.44609 15.624 7.53443C15.4667 5.62276 14.583 3.844 13.1546 2.56388C11.7261 1.28377 9.86149 0.599604 7.94408 0.652071C6.02668 0.704538 4.20225 1.48965 2.84593 2.84596C1.48962 4.20228 0.704507 6.02671 0.65204 7.94411C0.599573 9.86152 1.28374 11.7262 2.56385 13.1546C3.84397 14.5831 5.62273 15.4668 7.5344 15.624C9.44606 15.7813 11.3453 15.2001 12.8416 14L15.9083 17.0667C15.9858 17.1448 16.078 17.2068 16.1795 17.2491C16.281 17.2914 16.39 17.3132 16.5 17.3132C16.61 17.3132 16.7189 17.2914 16.8205 17.2491C16.922 17.2068 17.0142 17.1448 17.0916 17.0667C17.2418 16.9113 17.3258 16.7036 17.3258 16.4875C17.3258 16.2714 17.2418 16.0637 17.0916 15.9083ZM8.16665 14C7.01292 14 5.88511 13.6579 4.92582 13.0169C3.96653 12.3759 3.21886 11.4649 2.77735 10.399C2.33584 9.3331 2.22032 8.16021 2.4454 7.02865C2.67048 5.8971 3.22605 4.8577 4.04186 4.04189C4.85766 3.22608 5.89707 2.67051 7.02862 2.44543C8.16018 2.22035 9.33307 2.33587 10.399 2.77738C11.4649 3.21889 12.3759 3.96657 13.0169 4.92585C13.6579 5.88514 14 7.01295 14 8.16668C14 9.71378 13.3854 11.1975 12.2914 12.2915C11.1975 13.3854 9.71374 14 8.16665 14Z" fill="#667479" />

                                    </svg>
                                </span>

                                {/* Input */}
                                <input
                                    type="text"
                                    placeholder="Search something here!"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSearchSubmit(e)}
                                    className="w-full pl-10 pr-10 py-[6px] bg-neutral backdrop-blur-sm border border-white/30 rounded-full text-neutral-80 placeholder-neutral-40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all placeholder:text-body-medium-14"
                                />

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

                        <div>
                            <Button size='medium' label='Join the community' className='text-body-bold-14 w-[203px]' />

                        </div>

                        <div className="relative">
                            <button
                                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                                className="flex items-center space-x-2 px-3 py-2  backdrop-blur-sm text-primary-dark80 hover:bg-white/30 rounded-lg transition-all"
                            >
                                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2224_1306)">
                                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" fill="#D80027" />
                                        <path d="M11 7.17392L11.8634 9.83108H14.6573L12.397 11.4733L13.2603 14.1305L11 12.4882L8.73971 14.1305L9.60309 11.4733L7.34277 9.83108H10.1366L11 7.17392Z" fill="#FFDA44" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2224_1306">
                                            <rect width="16" height="16" fill="white" transform="translate(3 3)" />
                                        </clipPath>
                                    </defs>
                                </svg>

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
                                            className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${currency === selectedCurrency ? 'bg-gray-50 text-primary-dark80 font-medium' : 'text-gray-800'
                                                }`}
                                        >
                                            {currency}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Currency Selector */}



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
                        {isMenuOpen ? <X className="h-6 text-primary w-6" /> :

                            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.66669 15.1667H20.3334M1.66669 8.50001H20.3334M1.66669 1.83334H20.3334" stroke="#00171F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        }
                    </button>

                    {/* Logo */}
                    <Link href="/" className="flex-1  justify-center items-center flex">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={120}
                            height={40}

                        />

                    </Link>

                    {/* Search Icon */}
                    <button
                        onClick={() => {
                            setIsSearchOpen(!isSearchOpen);
                            setIsMenuOpen(false);
                        }}
                        className="p-2 text-white hover:text-purple-200 transition-colors"
                    >
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.6771 21.061L18.4131 16.8283C20.0682 14.763 20.8698 12.1416 20.6529 9.5031C20.436 6.86457 19.2172 4.40946 17.2471 2.64261C15.277 0.875762 12.7054 -0.0685392 10.0609 0.00387725C7.41647 0.0762937 4.90025 1.15992 3.02965 3.03195C1.15904 4.90398 0.0762357 7.42211 0.0038743 10.0686C-0.0684871 12.715 0.875097 15.2886 2.64061 17.2602C4.40612 19.2318 6.85935 20.4515 9.49588 20.6686C12.1324 20.8856 14.7518 20.0835 16.8155 18.4271L21.045 22.6598C21.1519 22.7676 21.279 22.8531 21.419 22.9115C21.5591 22.9699 21.7093 23 21.861 23C22.0128 23 22.163 22.9699 22.303 22.9115C22.4431 22.8531 22.5702 22.7676 22.6771 22.6598C22.8842 22.4453 23 22.1587 23 21.8604C23 21.5621 22.8842 21.2755 22.6771 21.061ZM10.3679 18.4271C8.77668 18.4271 7.22122 17.9549 5.89819 17.0702C4.57516 16.1855 3.54398 14.928 2.93506 13.4569C2.32614 11.9857 2.16681 10.3668 2.47724 8.80501C2.78767 7.24321 3.5539 5.8086 4.67904 4.6826C5.80419 3.5566 7.23771 2.78979 8.79833 2.47912C10.3589 2.16846 11.9766 2.3279 13.4466 2.93729C14.9167 3.54668 16.1732 4.57864 17.0572 5.90267C17.9412 7.2267 18.4131 8.78335 18.4131 10.3757C18.4131 12.5111 17.5655 14.559 16.0567 16.0689C14.5479 17.5788 12.5016 18.4271 10.3679 18.4271Z" fill="#00171F" />
                        </svg>

                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/20">
                    <div className="px-4 py-6 space-y-4">
                        <a href="#" className="block text-white/90 hover:text-white py-3 font-medium border-b border-white/10">
                            Home
                        </a>
                        <a href="#" className="block text-white/90 hover:text-white py-3 font-medium border-b border-white/10">
                            Category
                        </a>
                        <a href="#" className="block text-white/90 hover:text-white py-3 font-medium border-b border-white/10">
                            About
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
                                    <span> {selectedCurrency}</span>
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
                                            className={`block py-2 transition-colors ${currency === selectedCurrency
                                                ? 'text-primary-dark40 font-medium'
                                                : 'text-white/70 hover:text-white'
                                                }`}
                                        >
                                            {currency}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button className="w-full px-6 py-3 bg-primary-dark80 text-neutral font-semibold rounded-full hover:bg-gray-100 transition-colors mt-6">
                            Join the community
                        </button>
                    </div>
                </div>
            )}

            {/* Mobile Search */}
            {/* {isSearchOpen && (
                <div className="lg:hidden  absolute top-full left-0 right-0  p-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Rechercher des produits..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                            className="w-full pl-4 pr-10 py-3 bg-neutral-400 backdrop-blur-sm border border-white/30 rounded-full text-primary-dark80 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10 transition-all"
                            autoFocus
                        />
                        <button
                            onClick={handleSearchSubmit}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
                        >
                            <Search className="h-5 w-5" />
                        </button>
                    </div>

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
            )} */}
        </nav>
    );
};

export default Navbar