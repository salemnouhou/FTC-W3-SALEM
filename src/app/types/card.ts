import { ReactNode } from "react";

export type CardVariant = "dog" | "product" | "knowledge" ;

export interface CardProps {
  variant?: CardVariant;
  children?: ReactNode;
  dogImage?: string;
  productImage?: string;
  blogImage?: string;
  title?: string;
  description?: string;
  author?: string;
  className?: string;
  benefitType?: string;
  titleDesktop?: string;
  howItWorksType?: string;

  testimonyTitle?: string;
  testimonyDescription?: string;
  testimonyDescriptionDesktop?: string;
  testimonyAuthor?: string;
  testimonyImage?: string;
  testimonyRole?: string;
}