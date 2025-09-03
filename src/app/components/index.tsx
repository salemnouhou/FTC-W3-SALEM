// ========================================
// POINT D'ENTRÉE PRINCIPAL DES COMPOSANTS
// ========================================
// Ce fichier centralise l'exportation de tous les composants de l'application
// pour faciliter les imports et maintenir une structure claire

// ========================================
// COMPOSANTS DE MISE EN PAGE (LAYOUT)
// ========================================
// Composants principaux qui structurent les différentes sections de la page
export { default as Navbar } from "./ui/Navbar";           // Barre de navigation principale
export { default as HeroSection } from "./layout/HeroSection";

// ========================================
// COMPOSANTS D'INTERFACE UTILISATEUR (UI)
// ========================================
// Composants réutilisables pour l'interface utilisateur
export { default as Button } from "./ui/Button";           // Boutons avec différentes variantes
export { default as HamburgerMenu } from "./ui/HamburgerMenu"; // Menu mobile hamburger
export { default as Logo } from "./ui/Logo";               // Logo de l'entreprise
export { default as Card } from "./ui/Card";               // Cartes avec effets 3D et parallaxe
export { default as CustomCursor } from "./ui/CustomCursor"; // Curseur personnalisé pour l'UX

// ========================================
// COMPOSANTS SPÉCIALISÉS
// ========================================
// Composants avec des fonctionnalités spécifiques
export { ImageWithSkeleton } from "./ui/ImageWithSkeleton"; // Image avec skeleton loading

// ========================================
// HOOKS PERSONNALISÉS
// ========================================
// Hooks réutilisables pour la logique métier
export * from "../hooks";


