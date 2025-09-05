import { ReactNode } from "react";

export type BannerVariant = "homefirst" | "homesecond" | "category" ;

export interface BannerProps {
  variant?: BannerVariant;
  homeFirstImage?: string;
  children?: ReactNode;
  dogImage?: string;
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