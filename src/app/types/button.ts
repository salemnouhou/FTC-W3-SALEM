import { ReactNode } from "react";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "primary" | "secondary" | "minimal";
export type ButtonState = "enabled" | "disabled";

export type ButtonProps = {
    size?: ButtonSize;
    variant?: ButtonVariant;
    state?: ButtonState;
    label?: string;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    onClick?: () => void;
    className?: string;

    calNamespace?: string;
    calLink?: string;
    calConfig?: Record<string, unknown>;

}