"use client";
import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour le curseur personnalisé
 * 
 * Gère :
 * - La position du curseur en temps réel
 * - Les animations fluides du curseur
 * - La synchronisation avec le mouvement de la souris
 */
export const useCustomCursor = () => {
  // État pour stocker la position du curseur
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Effet pour écouter le mouvement de la souris
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Mise à jour de la position du curseur
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Ajout de l'écouteur d'événement
    window.addEventListener('mousemove', handleMouseMove);
    
    // Nettoyage de l'écouteur lors du démontage
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return {
    cursorPosition,
    // Fonction utilitaire pour obtenir la position formatée
    cursorPositionFormatted: {
      x: Math.round(cursorPosition.x),
      y: Math.round(cursorPosition.y)
    }
  };
};
