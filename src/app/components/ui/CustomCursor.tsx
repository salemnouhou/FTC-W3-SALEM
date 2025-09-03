"use client";
import { useCustomCursor } from '@/app/hooks';

/**
 * Composant CustomCursor - Curseur personnalisé
 * 
 * Remplace le curseur par défaut par un curseur personnalisé
 * qui suit le mouvement de la souris avec des animations fluides
 */
const CustomCursor = () => {
  // Utilisation du hook personnalisé pour la position du curseur
  const { cursorPosition } = useCustomCursor();

  return (
    <>
      <div
        className="fixed w-10 h-10 hidden xl:block rounded-full border-2 border-green-500 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${cursorPosition.x - 20}px, ${cursorPosition.y - 20}px)`,
        }}
      />
      <div
        className="fixed w-2 h-2 hidden xl:block rounded-full bg-purple-500 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${cursorPosition.x - 4}px, ${cursorPosition.y - 4}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
