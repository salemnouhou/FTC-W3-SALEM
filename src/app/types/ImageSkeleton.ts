import { ImageProps } from "next/image";


export interface ImageWithSkeletonProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
}