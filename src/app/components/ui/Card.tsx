
"use client"
import React from "react";
import clsx from "clsx";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import { CardProps } from "@/app/types/card";

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
  image,
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
  titleDesktop,
}) => {
  let content;

  if (variant === "testimonial") {
    content = (
      <div className="  flex flex-col gap-6 p-6 bg-secondary-500 w-full  rounded-[9.98px] lg:rounded-[12px] ">
        <span className="text-white">
          {testimonyTitle}
        </span>
        <div className=" md:h-32  xl:hidden">
          <p className="text-secondary-100 ">
            {testimonyDescription}
          </p>
        </div>


        <div className="   h-[125px]   hidden xl:block  ">
          <p
            className="text-secondary-100  "
            dangerouslySetInnerHTML={{ __html: testimonyDescriptionDesktop || "" }}
          />
        </div>


        <hr className="border-t border-secondary-400/20 " />

        <div>
          <div className="flex lg:gap-6 items-center gap-4">
            <div className=" h-[58px] rounded-[10px] w-[58px] lg:h-[70px] lg:w-[70px] ">
              {testimonyImage && (
                <ImageWithSkeleton
                  src={testimonyImage}
                  alt={testimonyAuthor || "Author"}
                  width={40}
                  height={40}
                  className="w-full h-full rounded-[10px] object-cover"
                />
              )}
            </div>
            <div className="flex flex-col space-y-[5px]">
              <span className="text-white font-semibold text-medium-16 lg:text-bold-18">{testimonyAuthor}</span>
              <span className="text-secondary-200 text-regular-12 lg:text-regular-14">{testimonyRole}</span>
            </div>
          </div>
        </div>

      </div>
    );
  } else if (variant === "benefitsOne") {
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
  } else if (variant === "benefitsTwo") {
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
  } else if (variant === "howitworks") {
    content = (
      <div className=" flex flex-col items-center">

        <div className="  w-[259px]  h-[258px] sm:h-[200px] sm:w-[200px]  md:h-[225px] md:w-[225px] relative rounded-[10.16px]  ">
          {image && (
            <ImageWithSkeleton
              src={image}
              alt="title"
              width={320}
              height={200}
              className=" absolute right-5"
            />
          )}





        </div>

        <div className="mt-4 text-center space-y-4  px-1 rounded-[10.16px]">
          <span
            className="lg:hidden text-medium-14 text-white"
            dangerouslySetInnerHTML={{ __html: title || "" }}
          />
          <span
            className="hidden lg:block text-medium-14 text-white"
            dangerouslySetInnerHTML={{ __html: titleDesktop || "" }}
          />
        </div>
      </div>
    );
  } else if (variant === "howitworksTwo") {
    content = (
      <div className=" flex flex-col items-center">

        <div className="  w-[319px]  h-[211px]  relative   ">
          {image && (
            <ImageWithSkeleton
              src={image}
              alt="title"
              width={320}
              height={200}
              className=" "
            />
          )}





        </div>

        <div className="mt-4 text-center space-y-4  px-1 rounded-[10.16px]">
          <span
            className="lg:hidden text-medium-14 text-white"
            dangerouslySetInnerHTML={{ __html: title || "" }}
          />
          <span
            className="hidden lg:block text-medium-14 text-white"
            dangerouslySetInnerHTML={{ __html: titleDesktop || "" }}
          />
        </div>
      </div>
    );
  }

  return <div className={clsx("transition-all duration-200", className)}>{content}</div>;
};

export default Card;