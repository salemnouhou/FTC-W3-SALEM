"use client"
import React from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import defaultProduct from "@/assets/images/products/defaultProduct.png"


import sheba from "@/assets/images/partners/sheba.png"
import Whiskas from "@/assets/images/partners/whiskas.png"
import Bakers from "@/assets/images/partners/bakers.png"
import Felix from "@/assets/images/partners/felix.png"
import Goodboy from "@/assets/images/partners/goodboy.png"
import Buthers from "@/assets/images/partners/butchers.png"
import Pedigree from "@/assets/images/partners/pedigree.png"

import Image from 'next/image'

const partners = [
    { name: "Sheba", logo: sheba },
    { name: "Whiskas", logo: Whiskas },
    { name: "Bakers", logo: Bakers },
    { name: "Felix", logo: Felix },
    { name: "Goodboy", logo: Goodboy },
    { name: "Buthers", logo: Buthers },
    { name: "Pedigree", logo: Pedigree },
];


const PetSellers = () => {
    const logos = [...partners, ...partners];

    return (
        // <div>
        //     <div className='flex justify-between items-center mb-6 '>
        //         <div className='space-y-2'>
        //             <span className='block text-body-medium-14 md:text-body-medium-16 text-[#000000]'>Hard to choose right products for your pets?</span>
        //             <span className='block text-primary-dark80  text-body-bold-20 md:text-body-bold-24'>Our Products</span>
        //         </div>

        //         <div className='hidden md:flex'>
        //             <Button
        //                 className='h-[44px] w-[151px] px-[28px] py-[12px] rounded-[57px]'
        //                 variant='minimal'
        //                 label='View more'
        //                 size='medium'
        //                 iconRight={<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M1.33331 1.66666L4.66665 4.99999L1.33331 8.33332" stroke="#003459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        //                 </svg>
        //                 } />
        //         </div>

        //     </div>


        // </div>

        <div className="relative w-full overflow-hidden bg-white py-6 space-y-8">
            <div className='flex justify-between items-center'>
                <div className=' flex items-center space-x-2'>
                    <span className='block text-body-medium-14 md:text-body-medium-16 text-[#000000]'>Proud to be part of</span>
                    <span className='block text-primary-dark80  text-body-bold-20 md:text-body-bold-24'>Pet Sellers</span>
                </div>

                <div className='hidden md:flex '>
                    <Button
                        className='h-[44px] w-[181px] px-[28px] py-[12px] rounded-[57px]'
                        variant='minimal'
                        label='View all our sellers '
                        size='medium'
                        iconRight={<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33331 1.66666L4.66665 4.99999L1.33331 8.33332" stroke="#003459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        } />
                </div>
            </div>

            <div className="flex animate-scroll space-x-[10px]">
                {logos.map((partner, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 px-[16px]  flex items-center justify-center w-[151.43px] h-[112px] "
                    >
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={160}
                            height={80}
                            className="object-contain h-14 md:h-24"
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
        .animate-scroll {
          animation: scroll 13s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </div>
    )
}

export default PetSellers