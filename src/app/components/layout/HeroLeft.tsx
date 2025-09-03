import React from 'react'
import Button from '../ui/Button'
import Play from "@/assets/icons/Vector.png"

const HeroLeft = () => {
  return (
    <div className="  px-  h-full pt-32  ">
      <div className=" relative">
  <div
    style={{ transform: "rotate(25.23deg)" }}
    className="hidden lg:block h-[67.1px] w-[67.1px]
      rounded-[20px] bg-[#F7DBA7] absolute 
      -top-[4px] -left-[10px] z-0"
  />

  <h1 className="relative z-10 text-heading-bold-60 text-primary-dark80 font-bold mb-8 leading-tight">
    One more friend
    <span className="block text-heading-bold-46 text-primary-dark80">
      Thousands more fun!
    </span>
  </h1>
</div>


      <div className='text-start'>
        <p className="text-body-medium-16 text-neutral-80 mb-8 max-w-3xl">
          Having a pet means you have more joy, a new friend, a happy <br />
          person who will always be with you to have fun. We have 200+ <br />
          different pets that can meet your needs!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
        <Button className='bg-transparent pt-[14px] pb-[10px] w-[161px] h-[48px]' variant='minimal' size='medium' label='View Intro'
          iconRight={Play}
        />
        <Button className=' pt-[14px] pb-[10px] w-[161px] h-[48px]' variant='primary' size='medium' label='Explore Now'
        />
      </div>

      {/* Hero Stats */}

    </div>
  )
}

export default HeroLeft