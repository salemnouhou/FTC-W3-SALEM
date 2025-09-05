
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
    } else if (variant === "homesecond") {
        content = (
            <div className=" relative overflow-hidden bg-[#FFB775] rounded-[20px] h-[610px] md:h-[328px] w-full hidden lg:flex flex-col md:flex-row">


                {/* DESKTOP VERSION */}


                <div className="absolute hidden md:block  p-14 w-1/2 left-0 ">



                    {/* <svg className="absolute left-0 top-20 w-full" width="701" height="315" viewBox="0 0 701 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="41.4933" y="-34.2795" width="787.54" height="787.54" rx="99" transform="rotate(28.2512 41.4933 -34.2795)" fill="#002A48" />
                    </svg> */}

                    <svg className="absolute -left-40 xl:left-0 top-0 " width="642" height="378" viewBox="0 0 642 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="782.292" height="635" rx="99" transform="matrix(-0.904604 0.426252 0.426252 0.904604 403.665 -360)" fill="#FCEED5" />
                    </svg>




                    <div className="absolute  right-1 md:right-1 top-1 md:top-8 lg:left-10 z-50 hidden md:flex flex-col space-y-3 justify-center items-start">

                        <div className="flex items-center justify-center space-x-4">
                            <span className="text-start text-body-bold-60 text-primary-dark80">
                                Adoption
                            </span>

                            <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.3146 8.51235V8.56143C22.3139 9.5215 22.4822 10.4745 22.8121 11.3785L22.7927 11.3199C23.1133 12.2007 23.6581 12.9867 24.3754 13.6032L24.3818 13.608C25.0618 14.2081 25.9662 14.5739 26.9578 14.5739H27.0353H27.0321C28.3403 14.5666 29.5932 14.0553 30.5205 13.1504C31.5335 12.2387 32.3216 11.1129 32.8251 9.85831L32.8461 9.79813C33.3341 8.61246 33.5911 7.34756 33.6036 6.06903V6.01361C33.6036 5.02552 33.4275 4.07701 33.1061 3.19659L33.1255 3.25518C32.8049 2.37433 32.2601 1.58836 31.5428 0.971801L31.5363 0.96705C30.8065 0.323216 29.853 -0.0223897 28.8716 0.00112587H28.8764C27.5678 0.00661014 26.3142 0.518173 25.388 1.42468C24.3851 2.33632 23.6036 3.45697 23.1011 4.70407L23.0801 4.76424C22.6134 5.87268 22.3372 7.16005 22.3227 8.5076V8.51235H22.3146ZM30.9469 20.4645L30.9452 20.5975C30.9433 21.7882 31.3186 22.9502 32.0192 23.9228L32.0063 23.9038C32.3258 24.3551 32.7519 24.7238 33.2483 24.9786C33.7447 25.2334 34.2965 25.3666 34.8568 25.3669L35.0167 25.3638H35.0086C36.3324 25.3495 37.6047 24.8593 38.5843 23.9861L38.5794 23.9909C39.6215 23.1158 40.4643 22.0357 41.0533 20.8207C41.6423 19.6057 41.9643 18.2829 41.9984 16.9381V16.9254L42 16.7955C42 15.5525 41.6027 14.3997 40.926 13.4544L40.9389 13.4734C40.6065 12.997 40.1556 12.6116 39.6287 12.3539C39.1019 12.0962 38.5167 11.9746 37.9286 12.0008H37.9366C36.6129 12.015 35.3405 12.5053 34.361 13.3784L34.3658 13.3736C33.3222 14.2539 32.4786 15.3392 31.8897 16.5593C31.3007 17.7794 30.9795 19.1071 30.9469 20.4566V20.4676V20.4645ZM20.9968 19.7962C18.6389 19.9224 16.3807 20.7703 14.54 22.2206L14.5626 22.2031C12.3094 23.7721 10.368 25.732 8.83413 27.986L8.78245 28.0668C7.39997 29.8879 6.59202 32.0662 6.45845 34.3326L6.45684 34.3643L6.45361 34.502C6.45361 35.1418 6.61349 35.7467 6.89612 36.2771L6.88643 36.2565C7.1576 36.743 7.58112 37.131 8.09446 37.3634L8.11061 37.3697C8.58058 37.5898 9.12806 37.7624 9.69978 37.859L9.73854 37.8638C10.3347 37.956 10.9374 38.0015 11.5409 38H11.662H11.6556C13.3196 37.892 14.9521 37.503 16.4812 36.8504L16.3875 36.8868C17.8316 36.2694 19.3711 35.8942 20.9419 35.7768L20.9919 35.7736C22.7733 35.9034 24.4238 36.2961 25.9581 36.9121L25.8499 36.8741C27.4497 37.5041 29.1433 37.8753 30.8645 37.973L30.9097 37.9746C33.9955 37.9767 35.5383 36.7738 35.5383 34.3659C35.4684 32.6786 34.9735 31.0346 34.0978 29.5806L34.1252 29.6281C33.1804 27.8858 31.9933 26.2807 30.598 24.8586L30.6045 24.865C29.2407 23.4684 27.6811 22.2693 25.9726 21.3037L25.8725 21.2515C24.4133 20.3588 22.7413 19.856 21.0226 19.7931H21.0032L20.9968 19.7962ZM14.9647 14.5755H15.039C15.9914 14.5765 16.9104 14.2312 17.6182 13.6064L17.6149 13.6096C18.3265 13.0021 18.8689 12.2273 19.1912 11.3579L19.2041 11.3199C19.5245 10.4343 19.6868 9.50111 19.6838 8.56143V8.50918V8.51235C19.6692 7.15847 19.3931 5.87268 18.9005 4.69457L18.9263 4.76424C18.4259 3.49609 17.6385 2.35584 16.6233 1.42943L16.6169 1.42468C15.6904 0.519718 14.4378 0.008873 13.1301 0.00270936H13.0542C12.0625 0.00270936 11.1581 0.370077 10.475 0.971801L10.4782 0.968634C9.77084 1.57511 9.22496 2.34468 8.90196 3.22035L8.88904 3.25835C8.58057 4.08493 8.40292 5.03977 8.40292 6.0342V6.06587V6.06428C8.41691 7.36974 8.68267 8.66081 9.1862 9.86939L9.16037 9.79972C9.66119 11.0748 10.4547 12.2197 11.4795 13.1456L11.486 13.152C12.4137 14.0546 13.6658 14.5641 14.9728 14.5708H14.9744L14.9647 14.5755ZM4.06339 12.0039L3.91481 12.0008C2.73423 12.0008 1.69255 12.5803 1.06916 13.4655L1.06108 13.4766C0.36726 14.4512 -0.00325012 15.6118 1.90735e-05 16.8003L0.00163651 16.9365V16.9301C0.0334435 18.2741 0.353107 19.5966 0.939892 20.8116C1.52668 22.0267 2.36747 23.1071 3.4077 23.983L3.42061 23.9941C4.39863 24.8639 5.6678 25.3523 6.98817 25.3669H6.99141C7.57462 25.3926 8.15499 25.2733 8.67851 25.0199C9.20203 24.7666 9.65169 24.3876 9.98563 23.9181L9.99371 23.907C10.7152 22.8998 11.0867 21.6916 11.0532 20.4613V20.4676C11.0222 19.1189 10.7031 17.7915 10.1164 16.5712C9.52974 15.3509 8.68852 14.2648 7.6471 13.3831L7.63418 13.3721C6.65726 12.5049 5.39077 12.0178 4.07308 12.0023H4.06985L4.06339 12.0039Z" fill="#003459" />
                            </svg>

                        </div>

                        <span className="text-start  text-body-bold-36 text-primary-dark80">
                            We Need Help. So Do They.
                        </span>

                        <div className="   text-start  flex  text-neutral-80 text-body-medium-12">
                            Adopt a pet and give it a home, <br />
                            it will be love you back unconditionally.
                        </div>

                        <div className="flex  sm:flex-row gap-6 justify-center   py-5 ">
                            <Button className=' pt-[14px] pb-[10px] px-10 w-[161px] h-[44px] text-body-medium-12' variant='primary' size='small' label='Explore Now'
                            />
                            <Button className='bg-transparent  h-[44px] w-[161px]  lg:text-body-medium-16' variant='minimal' size='small' label='View Intro'
                                iconRight={Play}
                            />

                        </div>
                    </div>


                </div>


                <div className="absolute hidden md:block z-10   p-14 lg:w-1/3 right-0 ">


                    <svg className="absolute z-10 -right-64 md:-right-32 lg:right-0 top-20" width="701" height="315" viewBox="0 0 701 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.3" width="787.54" height="787.54" rx="99" transform="matrix(-0.880881 0.473338 0.473338 0.880881 659.507 -34.2795)" fill="url(#paint0_linear_78_489)" />
                        <defs>
                            <linearGradient id="paint0_linear_78_489" x1="0" y1="0" x2="958.452" y2="218.934" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0616933" stop-color="#FCEED5" />
                                <stop offset="0.751415" stop-color="#FCEED5" />
                                <stop offset="1" stop-color="#FFE7BA" />
                            </linearGradient>
                        </defs>
                    </svg>




                    <Image
                        src={homeFirstImage || '/placeholder.jpg'}
                        alt="Dog"
                        width={500}
                        height={400}
                        style={{ rotate: '-5deg' }}
                        className="absolute -bottom-60 z-50 h-[359px] w-[538.53px] -left-6 hidden md:block"
                    />



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
    } else if (variant === "knowledge") {
        content = (
            <div>
                <div className="bg-gray-100  h-[325px] md:h-[307px] relative rounded-[10.16px]  overflow-hidden">
                    {dogImage && (
                        <ImageWithSkeleton
                            src={dogImage}
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