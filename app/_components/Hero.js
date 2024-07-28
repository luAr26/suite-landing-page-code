/** @format */

import Button from "@/app/_components/Button";
import Image from "next/image";
import Stats from "./Stats";
import heroImage from "@/public/image-hero-landscape@2x.webp";
import Testimonial from "@/app/_components/Testimonial";

function Hero() {
  // Example background position: bg-[right_13vw_top_20%]
  return (
    <div className='flex flex-col desktop:flex-row desktop:gap-24 desktop:items-center '>
      <section className=' tablet:bg-[url(/image-hero-portrait.png)] bg-no-repeat bg-[length:281px_482px] bg-right-top desktop:grow mt-14 tablet:mt-[5rem] tablet:pb-[3rem] desktop:pb-[5rem]'>
        <h1 className='inline-block pt-5 text-[2.375rem] tablet:text-[4rem] leading-[1.1578]  bg-no-repeat bg-right-top bg-[length:151px_19px] bg-[url(/pattern-curved-line-1.svg)] tablet:bg-[length:231px_29px] tablet:bg-[right_1.75rem_top] tablet:pt-10 tablet:mt-[2.625rem]'>
          A <span className='font-bold'>super solution</span> <br />
          for your <span className='font-bold'>business.</span>
        </h1>
        <p className='text-grey mt-8 text-[1rem] leading-[1.75] tracking-[0.09px] tablet:w-[55%]'>
          Our marketing and sales automation help you scale your outreach to get
          more leads for your company.
        </p>
        <p className='mt-8'>
          <Button buttonLabel='Request Beta Access' />
        </p>
        <div className='overflow-hidden w-full rounded-[15px] h-[240px] relative tablet:hidden mt-14'>
          <Image
            src={heroImage}
            alt='mobile phone on nice background'
            fill
            className='object-cover'
            // priority
            placeholder='blur'
            sizes='(max-width: 767px) calc(100vw - 32px)'
          />
        </div>
      </section>
      <Stats />
    </div>
  );
}

export default Hero;
