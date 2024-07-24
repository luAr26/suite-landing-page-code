/** @format */

import Button from "@/app/_components/Button";
import Image from "next/image";
import Stats from "./Stats";

function Hero() {
  // Example background position: bg-[right_13vw_top_20%]
  return (
    <div className='flex flex-col desktop:flex-row '>
      <section className='outline tablet:bg-[url(/image-hero-portrait.png)] bg-no-repeat bg-[length:281px_482px] bg-right-top desktop:grow'>
        <h1
          style={{ backgroundImage: "url(/pattern-curved-line-1.svg)" }}
          className='inline-block pt-5 text-[2.375rem] tablet:text-[4rem] leading-[1.1578]  bg-no-repeat bg-right-top bg-[length:151px_19px]'
        >
          A <span className='font-bold'>super solution</span> <br />
          for your <span className='font-bold'>business.</span>
        </h1>
        <p className='text-grey text-[1rem] leading-[1.75] tracking-[0.09px] mb-8'>
          Our marketing and sales automation help you scale your outreach to get
          more leads for your company.
        </p>
        <p>
          <Button buttonLabel='Request Beta Access' />
        </p>
        <div className=' tablet:hidden'>
          <Image
            src='/image-hero-landscape.png'
            width={343}
            height={240}
            alt='mobile phone'
          />
        </div>
      </section>
      <Stats />
    </div>
  );
}

export default Hero;
