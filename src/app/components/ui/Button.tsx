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
  size = "small",
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
    small: "py-[8.68px] px-[20.26px] text-body-medium-12",
    medium: "py-[10.13px] px-[20.26px] text-body-medium-12",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-white text-neutral   hover:bg-primary-dark40  focus:bg-primary-dark60 focus:outline-none focus:ring-2 focus:ring-primary-dark40 disabled:bg-primary/40",
    minimal:
      "bg-neutral border border-primary text-primary   disabled:bg-primary/40",

  };

  const baseClasses =
    "inline-flex items-center justify-center rounded-[41.24px]  font-jakarta transition-colors duration-200";

  const isIconOnly = !label && (iconLeft || iconRight);
  const iconOnlyClasses = isIconOnly && size==="small" ? "p-[8.68px] w-[31.84px]  rounded-full h-10" : 
  isIconOnly && size==="medium" ? "p-[8.68px] w-[34.73px] rounded-full h-10" : "";

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
        state === "disabled" && "cursor-not-allowed text-neutral-60 bg-neutral-20 ",
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
