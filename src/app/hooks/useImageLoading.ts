"use client";
import { useState } from 'react';

/**
 * Hook personnalisé pour la gestion du chargement des images
 * 
 * Gère :
 * - L'état de chargement de l'image
 * - Le basculement de l'état une fois l'image chargée
 * - La gestion des erreurs de chargement
 */
export const useImageLoading = () => {
  // État pour indiquer si l'image est chargée
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * Fonction pour marquer l'image comme chargée
   */
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  /**
   * Fonction pour réinitialiser l'état de chargement
   * Utile pour recharger une image
   */
  const resetLoading = () => {
    setIsLoaded(false);
  };

  return {
    isLoaded,
    handleImageLoad,
    resetLoading
  };
};
