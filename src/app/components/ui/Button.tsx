"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "motion/react"
import { ButtonProps, ButtonSize, ButtonVariant } from "@/app/types";

/**
 * Composant Button - Bouton personnalisable avec animations
 * 
 * Caractéristiques :
 * - 3 tailles : small, medium, large
 * - 3 variantes : primary, secondary, minimal
 * - Support des icônes (gauche et droite)
 * - Intégration Cal.com pour les rendez-vous
 * - Animations d'entrée avec Framer Motion
 * - États : enabled, disabled
 * - Design responsive et accessible
 */



const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  state = "enabled",
  label,
  iconLeft,
  iconRight,
  onClick,
  className,
  calNamespace,
  calLink,
  calConfig,
}) => {

  const sizeClasses: Record<ButtonSize, string> = {
    small: "py-[5px] px-[16px] text-medium-12",
    medium: "py-[9px] px-[16px] text-medium-12",
    large: "py-[13px] px-[24px] text-medium-16",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-white  hover:bg-primary-600 active:bg-primary-700 focus:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 disabled:bg-primary/40",
    secondary:
      "bg-white text-secondary-400 border border-primary-200 rounded-[60px]  hover:border-secondary-400 hover:text-secondary-500  active:bg-secondary-100 active:border-secondary-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-secondary-100 focus:text-secondary-400 disabled:bg-white disabled:border-secondary-100 disabled:text-secondary-300",
    minimal:
      " bg-transparent  rounded-[60px] text-secondary-300  hover:border-secondary-400 hover:text-secondary-500 hover:bg-white   active:bg-secondary-100 active:border-secondary-200 focus:bg-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-100 focus:text-secondary-400 disabled:bg-white disabled:border-secondary-100 disabled:text-secondary-300",

  };

  const baseClasses =
    "inline-flex items-center justify-center rounded-[60px]  font-jakarta transition-colors duration-200";

  const isIconOnly = !label && (iconLeft || iconRight);
  const iconOnlyClasses = isIconOnly ? "p-[12px] w-10 rounded-full h-10" : "";

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}

      {...(calNamespace ? { "data-cal-namespace": calNamespace } : {})}
      {...(calLink ? { "data-cal-link": calLink } : {})}
      {...(calConfig
        ? { "data-cal-config": JSON.stringify(calConfig) }
        : {})}
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        state === "disabled" && "cursor-not-allowed opacity-50",
        iconOnlyClasses,
        className
      )}
      onClick={state === "disabled" ? undefined : onClick}
      disabled={state === "disabled"}
    >
      {iconLeft && <span className={label ? "mr-2" : ""}>{iconLeft}</span>}
      {label && <span>{label}</span>}
      {iconRight && <span className={label ? "ml-2" : ""}>{iconRight}</span>}
    </motion.button>
  );
};

export default Button;
