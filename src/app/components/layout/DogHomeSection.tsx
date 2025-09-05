import React from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import defaultdog from "@/assets/images/dogs/defaultdog.png"
const DogHomeSection = () => {
    return (
        <div>
            <div className='flex justify-between items-center mb-6 '>
                <div className='space-y-2'>
                    <span className='block text-body-medium-14 md:text-body-medium-16 text-[#000000]'>Whats new?</span>
                    <span className='block text-primary-dark80  text-body-bold-20 md:text-body-bold-24'>Take A Look At Some Of Our Pets</span>
                </div>

                <div className='hidden md:flex'>
                    <Button
                        className='h-[44px] w-[151px] px-[28px] py-[12px] rounded-[57px]'
                        variant='minimal'
                        label='View more'
                        size='medium'
                        iconRight={<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33331 1.66666L4.66665 4.99999L1.33331 8.33332" stroke="#003459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        } />
                </div>

            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {Array.from({ length: 10 }).map((_, index) => (
                    <Card key={index} variant="dog" dogImage={defaultdog.src} />
                ))}


            </div>
            <div className='mt-4 md:hidden'>
            <Button
                        className='h-[44px] w-full px-[28px] text-body-medium-16 text-primary py-[12px] rounded-[57px]'
                        variant='minimal'
                        label='View more'
                        size='medium'
                        iconRight={<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33331 1.66666L4.66665 4.99999L1.33331 8.33332" stroke="#003459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        } />
            </div>
        </div>
    )
}

export default DogHomeSection