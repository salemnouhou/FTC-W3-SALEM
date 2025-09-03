import { ReactNode } from "react";

export type CardVariant = "testimonial" | "benefitsOne" | "benefitsTwo" | "howitworks" | "howitworksTwo";

export interface CardProps {
  variant?: CardVariant;
  children?: ReactNode;
  image?: string;
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