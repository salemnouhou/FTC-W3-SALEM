import React from 'react'
import Button from '../ui/Button'
import Play from "@/assets/icons/Vector.png"

const HeroLeft = () => {
  return (
    <div className="  md:px-4  h-full pt-4 md:pt-32  ">
      <div className=" relative">
        <div
          style={{ transform: "rotate(25.23deg)" }}
          className="hidden md:block md:h-[57.1px] md:w-[57.1px] lg:h-[67.1px] lg:w-[67.1px] rounded-[20px] bg-[#F7DBA7] absolute  -top-[4px] -left-[10px] z-0"
        />
        <div>
          
          <div
            style={{ transform: "rotate(25.23deg)" }}
            className="sm:hidden h-[15.93px] w-[15.93px] rounded-[4px] bg-[#F7DBA7] absolute top-[45px] right-28 z-0"
          />
         
        </div>

         <div
            style={{ transform: "rotate(30.59deg)" }}
            className="sm:hidden h-[12.4px] w-[12.4px] rounded-[4px] bg-[#002A48] absolute top-[70px] right-[172px] z-10"
          />

      <div
            style={{ transform: "rotate(9.62deg)" }}
            className="sm:hidden h-[15.93px] w-[15.93px] rounded-[4px] bg-[#F7DBA7] absolute top-[65px]  right-[164px] z-0"
          />





        <h1 className="hidden lg:block relative z-10 text-heading-bold-60 text-primary-dark80 font-bold mb-8 leading-tight">
          One more friend
          <span className="block text-heading-bold-46 text-primary-dark80">
            Thousands more fun!
          </span>
        </h1>

        <h1 className="lg:hidden relative z-10 text-5xl text-primary-dark80 font-bold mb-8 leading-tight">
          One more friend
          <span className="block text-heading-bold-28 text-primary-dark80">
            Thousands more fun!
          </span>
        </h1>
      </div>


      <div className='text-start lg:hidden'>
        <p className="text-body-medium-14 text-neutral-80 mb-8 max-w-3xl">
          Having a pet means you have more joy, a new friend, a happy
          person who will always be with you to have fun. We have 200+
          different pets that can meet your needs!
        </p>
      </div>

      <div className='text-start hidden lg:block'>
        <p className="text-body-medium-16 text-neutral-80 mb-8 max-w-3xl">
          Having a pet means you have more joy, a new friend, a happy <br />
          person who will always be with you to have fun. We have 200+ <br />
          different pets that can meet your needs!
        </p>
      </div>

      <div className="flex  sm:flex-row gap-6 justify-center md:justify-start items-start">
        <Button className='bg-transparent pt-[14px] pb-[10px] w-full md:w-[161px] h-[48px] text-body-medium-16' variant='minimal' size='medium' label='View Intro'
          iconRight={Play}
        />
        <Button className=' pt-[14px] pb-[10px] w-full md:w-[161px] h-[48px] text-body-medium-16' variant='primary' size='medium' label='Explore Now'
        />
      </div>

      {/* Hero Stats */}

    </div>
  )
}

export default HeroLeft