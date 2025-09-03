//ce composant HamburgerMenu est utilisé pour afficher un bouton hamburger qui permet d'ouvrir et de fermer le menu de navigation sur les écrans mobiles.
// Il prend deux props : isMenuOpen (un booléen indiquant si le menu est ouvert ou fermé) et toggleMenu (une fonction pour basculer l'état du menu).
"use client";
import React from "react";
import { HamburgerMenuProps } from "@/app/types/";

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isMenuOpen, toggleMenu }) => {

  return <div className="xl:hidden mr-4">
    <button
      onClick={toggleMenu}
      className="inline-flex items-center justify-center p-2  h-[44px] w-[45px]   transition-all duration-200"
      aria-expanded={isMenuOpen}
      aria-label="Menu principal"
    >
      <div className="w-6 h-6 relative flex items-center justify-center">
        <span
          className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`}
        />
        <span
          className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
        />
        <span
          className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`}
        />
      </div>
    </button>
  </div>;

};

export default HamburgerMenu;

