"use client"
import woman from "@/assets/woman.png"
import rectangle2 from "@/assets/rectangle2.png"
import Image from "next/image"
import React from 'react'

const HeroRight = () => {
    return (
        <div className="text-center relative border bg-green-300   ">
            <div style={{ transform: "rotate(20.79deg)" }} className="hidden xl:block h-[14.63px] w-[14.63px] rounded-[4px]  bg-[#F7DBA7] absolute top-24 left-1/4">

            </div>

            <div style={{ transform: "rotate(58.85deg)" }} className="hidden xl:block h-[27.5px] w-[27.5px] rounded-[9px]  bg-[#F7DBA7] absolute top-[140px] left-[155px]">

            </div>

            <div style={{ transform: "rotate(43deg)" }} className="hidden xl:block h-[21.47px] w-[21.47px] rounded-[6px]  bg-[#002A48] absolute top-[150px] left-[155px]">

</div>

            {/* DESKTOP WOMAN IMAGE */}
            <div className="border hidden md:hidden lg:block absolute md:bottom-30  xl:-bottom-25 -right-32 z-10">
                <Image
                    src={woman}
                    alt="woman"
                    height={900}
                    className="object-cover hidden  xl:block "
                />
            </div>

            {/* TAB WOMAN IMAGE */}

            <div className="border xl:hidden -right-20 absolute h-full z-10">
                <Image
                    src={woman}
                    alt="woman"
                    height={600}
                    className="object-cover sm:h-[80%] md:h-full "
                />
            </div>


            <div className="hidden border xl:block absolute -bottom-[265px] left-[1px] w-[914px] h-[914px] ">
                <svg width="702" height="413" viewBox="0 0 702 413" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="89.2182" y="-14" width="635" height="635" rx="99" transform="rotate(9.35484 89.2182 -14)" fill="#003459" />
                </svg>





            </div>

            <div className="absolute hidden xl:block  bottom-[240px] -right-20  ">
                <Image
                    src={rectangle2}
                    alt="rectangle2"
                    className="z-50"
                />
            </div>
        </div>
    )
}

export default HeroRight