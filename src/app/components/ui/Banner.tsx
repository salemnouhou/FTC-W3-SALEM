
"use client"
import React from "react";
import clsx from "clsx";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import { BannerProps } from "@/app/types/Banner";
import Image from "next/image";
import Button from "./Button";
import Play from "@/assets/icons/Vector.png"





const Banner: React.FC<BannerProps> = ({
    variant = "default",
    homeFirstImage,
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

    if (variant === "homefirst") {
        content = (
            <div className=" relative overflow-hidden bg-[#003459] rounded-[20px] h-[610px] md:h-[328px] w-full flex flex-col md:flex-row">


                {/* DESKTOP VERSION */}


                <div className="absolute hidden md:block  p-14 w-1/2 left-0 ">



                    <svg className="absolute left-0 top-20 w-full" width="701" height="315" viewBox="0 0 701 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="41.4933" y="-34.2795" width="787.54" height="787.54" rx="99" transform="rotate(28.2512 41.4933 -34.2795)" fill="#002A48" />
                    </svg>

                    <Image
                        src={homeFirstImage || '/placeholder.jpg'}
                        alt="Dog"
                        width={500}
                        height={400}
                        className="absolute -bottom-64 z-50 h-[324px] -left-6 hidden md:block"
                    />


                </div>


                <div className="absolute hidden md:block z-10   p-14 lg:w-1/3 right-0 ">

                    <svg className="absolute z-10 -right-64 md:-right-32 lg:right-0 top-0" width="642" height="378" viewBox="0 0 642 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="238.67" y="-360" width="782.292" height="635" rx="99" transform="rotate(25.23 238.67 -360)" fill="#FCEED5" />
                    </svg>



                    <div className="absolute  right-14 md:right-28 top-1 md:top-8 lg:right-8 z-50 hidden md:flex     flex-col space-y-2 justify-center items-center">

                        <span className="text-center md:text-sm lg:text-body-bold-36 text-primary-dark80">
                            One More Friend
                        </span>

                        <span className="text-center  text-body-bold-24 text-primary-dark80">
                            Thousand More Fun!
                        </span>

                        <div className="   text-center hidden md:flex lg:hidden text-neutral-80 text-body-medium-12">
                            c a pet means you have more joy, a new friend, a happy  person who will always be with you to have fun
                        </div>
                        <p className="text-center hidden lg:flex text-neutral-80 text-body-medium-12">
                            Having a pet means you have more joy, a new friend, a happy <br /> person who will always be with you to have fun. We have <br /> 200+ different pets that can meet your needs!
                        </p>
                        <div className="flex  sm:flex-row gap-6 justify-center  py-5 ">
                            <Button className='bg-transparent  h-[44px] w-[161px]  lg:text-body-medium-16' variant='minimal' size='small' label='View Intro'
                                iconRight={Play}
                            />
                            <Button className=' pt-[14px] pb-[10px] px-10 w-[161px] h-[44px] text-body-medium-12' variant='primary' size='small' label='Explore Now'
                            />
                        </div>
                    </div>



                </div>





























                {/* MOBILE VRSION */}
                <div className="relative md:hidden  w-full ">
                    <svg className="absolute  w-full" width="382" height="375" viewBox="0 0 382 375" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-79.3746" y="-354" width="605.027" height="635" rx="75" transform="rotate(11.4104 -79.3746 -354)" fill="#FCEED5" />
                    </svg>
                    <div className="absolute md:hidden  w-full flex flex-col space-y-2 justify-center items-center pt-8">

                        <span className="text-center text-body-bold-36 text-primary-dark80">
                            One More Friend
                        </span>

                        <span className="text-center text-body-bold-24 text-primary-dark80">
                            Thousand More Fun!
                        </span>
                        <p className="text-center text-neutral-80 text-body-medium-12">
                            Having a pet means you have more joy, a new friend, a happy <br /> person who will always be with you to have fun. We have <br /> 200+ different pets that can meet your needs!
                        </p>
                        <div className="flex  sm:flex-row gap-6 justify-center  py-5 ">
                            <Button className='bg-transparent  h-[44px] text-body-medium-16' variant='minimal' size='small' label='View Intro'
                                iconRight={Play}
                            />
                            <Button className=' pt-[14px] pb-[10px] px-10 w-[161px] h-[44px] text-body-medium-12' variant='primary' size='small' label='Explore Now'
                            />
                        </div>
                    </div>

                </div>


                <div className="absolute sm:hidden -bottom-32">
                    <svg className="h-96 w-full" width="382" height="205" viewBox="0 0 382 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="41.4932" y="-34.2795" width="787.54" height="787.54" rx="99" transform="rotate(28.2512 41.4932 -34.2795)" fill="#002A48" />
                    </svg>
                </div>
                <Image
                    src={homeFirstImage || '/placeholder.jpg'}
                    alt="Dog"
                    width={900}
                    height={400}
                    className="absolute -bottom-0 sm:h-1/2 md:hidden"
                />

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

export default Banner;