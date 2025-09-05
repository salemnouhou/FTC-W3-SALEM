
"use client"
import React from "react";
import clsx from "clsx";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import { CardProps } from "@/app/types/card";
import Image from "next/image";

/**
 * Composant Card - Carte polyvalente avec plusieurs variantes
 * 
 * Variantes disponibles :
 * - testimonial : Carte de témoignage client avec photo et rôle
 * - benefitsOne : Carte d'avantage avec image et description
 * - howitworks : Carte de processus avec titre et image
 * - pricing : Carte de tarification avec prix et fonctionnalités
 * 
 * Caractéristiques :
 * - Design responsive avec breakpoints mobile/tablet/desktop
 * - Images avec skeleton loading
 * - Support des variantes de contenu
 * - Classes CSS conditionnelles avec clsx
 * - Intégration des types TypeScript
 */



const Card: React.FC<CardProps> = ({
  variant = "default",
  dogImage,
  title,
  description,
  testimonyTitle,
  testimonyDescription,
  testimonyDescriptionDesktop,
  testimonyAuthor,
  testimonyImage,
  testimonyRole,
  className,
  benefitType,
}) => {
  let content;

  if (variant === "dog") {
    content = (
      <div className=" bg-[#FDFDFD] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.08)] shadow-[[#00000014] flex flex-col py-[16px] px-[8px] bg-secondary-500 w-full  rounded-[12px] lg:rounded-[12px] ">

        <div className="h-[169px]  rounded-[10px] mb-[8px]">
      <Image
      src={dogImage || '/placeholder.jpg'}
      alt="Dog Image"
      width={300}
      height={169}
      className="w-full h-full object-cover rounded-[10px] "
      />
        </div>

        <div className="flex flex-col space-y-[8px] mt-2 px-1">
          <div className="text-body-bold-14 space-y-2 md:space-x-1 text-neutral-100">
            <span className="block text-body-bold-14 md:inline md:text-body-bold-16">M0231 - Pomeranian</span>
            <span className="block text-body-bold-14 md:inline">White</span>
          </div>
          <div className="space-y-1">
            <span className="block text-neutral-60 text-body-medium-12">Gender: <span className="text-body-bold-12">Male</span></span>
            <span className="block text-neutral-60 text-body-medium-12">Age: <span className="text-body-bold-12">02 months</span></span>
          </div>
          <div>
            <span className="text-neutral-100 text-body-bold-16">6.900.000 VND</span>
          </div>
        </div>







      </div>
    );
  } else if (variant === "product") {
    content = (
      <div>

        <div className="bg-gray-100  h-[325px] md:h-[307px] relative rounded-[10.16px]  overflow-hidden">
          {image && benefitType === "first" && (
            <ImageWithSkeleton
              src={image}
              alt="title"
              width={320}
              height={200}
              className="absolute w-full -bottom-[120px] md:-bottom-[70px] lg:-bottom-[120px] right-4 z-0 "

            />
          )}
          {image && benefitType === "second" && (
            <ImageWithSkeleton
              src={image}
              alt="title"
              width={320}
              height={200}
              className="absolute w-full  -bottom-[120px] md:-bottom-[70px] lg:-bottom-[120px] right-4 z-0 "
            />
          )}


          {image && benefitType === "third" && (
            <ImageWithSkeleton
              src={image}
              alt="title"
              width={320}
              height={200}
              className="absolute w-full  -bottom-[120px] md:-bottom-[70px] lg:-bottom-[120px] right-4    z-0 "
            />
          )}




        </div>

        <div className="mt-4 space-y-4  px-1 rounded-[10.16px]">
          <span className="text-secondary-900 text-medium-18">{title}</span>
          <p
            className="text-regular-12 text-secondary-400"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />
        </div>
      </div>
    );
  } else if (variant === "knowledge") {
    content = (
      <div>
        <div className="bg-gray-100  h-[325px] md:h-[307px] relative rounded-[10.16px]  overflow-hidden">
          {image && (
            <ImageWithSkeleton
              src={image}
              alt="title"
              width={320}
              height={200}
              className="absolute w-full bottom-0 right-0 z-0 "
            />
          )}




        </div>


      </div>
    );
  }

  return <div className={clsx("transition-all duration-200", className)}>{content}</div>;
};

export default Card;