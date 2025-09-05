
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
  productImage,
  blogImage,
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

        <div className="h-[264px]  rounded-[10px] mb-[8px]">
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
      <div className=" bg-[#FDFDFD] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.08)] shadow-[[#00000014] flex flex-col py-[16px] px-[8px] bg-secondary-500 w-full  rounded-[12px] lg:rounded-[12px] ">

        <div className="h-[264px]  rounded-[10px] mb-[8px]">
          <Image
            src={productImage || '/placeholder.jpg'}
            alt="Product Image"
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
          <div className=" flex items-center space-x-1">
            <span className="block text-neutral-60 text-body-medium-10">Product: <span className="text-body-bold-10">Dog Food</span></span>
            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.95813 2.748C3.22213 2.484 3.35413 2.16 3.35413 1.788C3.35413 1.416 3.22213 1.092 2.95813 0.84C2.70613 0.576 2.38213 0.444 2.01013 0.444C1.63813 0.444 1.31413 0.576 1.05013 0.84C0.786125 1.092 0.654125 1.416 0.654125 1.788C0.654125 2.16 0.786125 2.484 1.05013 2.748C1.31413 3.012 1.63813 3.144 2.01013 3.144C2.38213 3.144 2.70613 3.012 2.95813 2.748Z" fill="#667479" />
            </svg>

            <span className="block text-neutral-60 text-body-medium-10">Size: <span className="text-body-bold-10">385gm</span></span>
          </div>
          <div>
            <span className="text-neutral-100 text-body-bold-14 lg:text-body-bold-16">140.000 VND</span>
          </div>
        </div>


        <button className="pt-[6px] mt-2 bg-secondary-yellow40 pb-[4px] flex items-center   px-[10px] gap-1 lg:gap-3 rounded-[8px]">
          <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.76835 10.1406L5.66679 9.44918C5.72538 9.42578 5.79569 9.41406 5.86597 9.41406H18.03C18.3582 9.41406 18.616 9.67184 18.616 10V18.2422C18.616 19.2148 17.8308 20 16.8582 20H5.1394C4.16671 20 3.38159 19.2148 3.38159 18.2422V10.6914C3.38159 10.4453 3.53397 10.2227 3.76835 10.1406Z" fill="#FC1A40" />
              <path d="M3.38135 10.6914V18.2422C3.38135 19.2148 4.16646 20 5.13916 20H10.9985V9.41406H5.86572C5.79541 9.41406 5.7251 9.42578 5.66654 9.44918L3.76811 10.1406C3.53373 10.2227 3.38135 10.4453 3.38135 10.6914Z" fill="#C60034" />
              <path d="M3.59235 3.81984C3.79153 3.01124 4.38922 2.37847 5.19782 2.12062C5.99469 1.87449 6.8502 2.05031 7.47126 2.61277L8.83067 3.80812L9.10016 2.01519C9.22907 1.19488 9.75641 0.50343 10.5415 0.175344C10.6939 0.116712 10.8462 0.0698366 10.9986 0.0463991C11.6431 -0.0825072 12.3111 0.0581178 12.8502 0.456594C13.565 0.972219 13.9282 1.83941 13.8111 2.70656C13.6822 3.57374 13.0962 4.31202 12.2642 4.60499L10.9986 5.06202L9.43997 5.63624C9.42825 5.63624 9.42825 5.63624 9.42825 5.63624L6.72122 6.6323C6.45172 6.72609 6.17047 6.773 5.90094 6.773C5.32665 6.773 4.76418 6.56199 4.31887 6.16359C3.66266 5.57765 3.38141 4.67527 3.59235 3.81984Z" fill="#FE9923" />
              <path d="M4.31885 6.16361C4.76416 6.56201 5.32666 6.77303 5.90092 6.77303C6.17041 6.77303 6.45166 6.72611 6.72119 6.63232L9.42822 5.63627C9.42822 5.63627 9.42822 5.63627 9.43994 5.63627L10.9985 5.06205V0.0463867C10.8462 0.0698633 10.6938 0.116699 10.5415 0.175332C9.75639 0.503418 9.229 1.19486 9.10014 2.01518L8.83064 3.80811L7.47123 2.61275C6.85018 2.05029 5.99467 1.87447 5.19779 2.12061C4.3892 2.37846 3.79154 3.01123 3.59232 3.81982C3.38135 4.67529 3.6626 5.57768 4.31885 6.16361Z" fill="#FE8821" />
              <path d="M1.37758 9.1445L2.17446 11.3476C2.26824 11.582 2.4909 11.7226 2.72528 11.7226C2.79559 11.7226 2.8659 11.7109 2.92445 11.6875L8.98309 9.48439L9.53383 7.66798L10.9987 7.99607L12.2877 8.28904L18.3463 6.08591C18.651 5.96876 18.8033 5.62888 18.6979 5.33591L17.8893 3.13286C17.737 2.68755 17.4088 2.33591 16.9869 2.13673C16.565 1.93755 16.0846 1.91408 15.6393 2.07814L10.9986 3.76564L10.6822 3.88279C10.6822 3.88279 9.4166 6.1797 9.38141 6.1797C9.35793 6.1797 8.85406 5.89845 8.36188 5.62888C7.86981 5.35935 7.37758 5.07814 7.37758 5.07814L2.43231 6.88279C1.98699 7.04685 1.63543 7.37501 1.43625 7.79689C1.23696 8.21872 1.21356 8.69923 1.37758 9.1445Z" fill="#FF3E75" />
              <path d="M1.37744 9.14449L2.17432 11.3476C2.26811 11.582 2.49076 11.7226 2.72514 11.7226C2.79545 11.7226 2.86576 11.7109 2.92432 11.6875L8.98295 9.48438L9.53369 7.66797L10.9985 7.99605V3.76562L10.6821 3.88277C10.6821 3.88277 9.4165 6.17969 9.38131 6.17969C9.35783 6.17969 8.85396 5.89844 8.36178 5.62887C7.86967 5.35934 7.37744 5.07812 7.37744 5.07812L2.43217 6.88277C1.98686 7.04684 1.63529 7.375 1.43611 7.79688C1.23682 8.21871 1.21342 8.69922 1.37744 9.14449Z" fill="#FC1A40" />
              <path d="M12.7566 9.41406V20H9.24097V9.41406H12.7566Z" fill="#FCBF29" />
              <path d="M10.6824 3.88281L10.9988 4.75L12.2878 8.2891L10.9988 8.75789L9.53398 9.28523L8.98323 9.48441L7.37769 5.07816L10.6824 3.88281Z" fill="#FCBF29" />
              <path d="M9.24048 9.41406H10.9983V20H9.24048V9.41406Z" fill="#FE9923" />
              <path d="M7.37744 5.07816L8.98295 9.48441L9.53369 9.2852L10.9985 8.75785V4.75L10.6821 3.88281L7.37744 5.07816Z" fill="#FE9923" />
            </svg>
          </div>
          <div>
            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="4" height="4" rx="2" fill="#003459" />
            </svg>

          </div>
          <div className="text-primary-dark80 text-body-bold-12 lg:text-body-bold-14 ">
            Free Toy & Free Shaker
          </div>

        </button>




      </div>
    );
  } else if (variant === "knowledge") {
   content = (
      <div className=" bg-[#FDFDFD] shadow-[0_4px_28px_-2px_rgba(0,0,0,0.08)] shadow-[[#00000014] flex flex-col py-[16px] px-[8px] bg-secondary-500 w-full  rounded-[12px] lg:rounded-[12px] ">

        <div className="h-[264px]  rounded-[10px] mb-[8px]">
          <Image
            src={blogImage || '/placeholder.jpg'}
            alt="Product Image"
            width={300}
            height={169}
            className="w-full h-full object-cover rounded-[10px] "
          />
        </div>

        <div className="flex flex-col space-y-[8px] mt-2 px-1">
          <div className="bg-state-blue rounded-[28px] text-body-bold-10 text-neutral  max-w-32 px-[10px] flex justify-center items-center py-[5px]">
              Pet knowledge
          </div>
         
          <div>
            <span className="text-neutral-100 text-body-bold-16 ">
            What is a Pomeranian? How to Identify Pomeranian Dogs
            </span>
          </div>

          <div>
            <p className="text-body-regular-14 text-neutral-80">
            Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.
            </p>
          </div>
        </div>





      </div>
    );
  }

  return <div className={clsx("transition-all duration-200", className)}>{content}</div>;
};

export default Card;