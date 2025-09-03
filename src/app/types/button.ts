import { ReactNode } from "react";
import type { StaticImageData } from "next/image";

export type ButtonSize = "small" | "medium" ;
export type ButtonVariant = "primary" | "minimal";
export type ButtonState = "enabled" | "disabled";

export type ButtonProps = {
    size?: ButtonSize;
    variant?: ButtonVariant;
    state?: ButtonState;
    label?: string;
    iconLeft?: ReactNode | StaticImageData;
    iconRight?: ReactNode | StaticImageData;
    onClick?: () => void;
    className?: string;

    calNamespace?: string;
    calLink?: string;
    calConfig?: Record<string, unknown>;

}