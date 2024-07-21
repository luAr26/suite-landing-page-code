/** @format */

import Button from "@/app/_components/Button";
import Image from "next/image";
import Stats from "./Stats";

function Hero() {
  return (
    <section>
      <h1 className='pt-9 pr-3 text-[38px] leading-[44px] bg-[url(/pattern-curved-line-1.svg)] bg-no-repeat bg-right-top bg-[length:151px_19px] mt-14 mb-8'>
        A <span className='font-bold'>super solution</span>
        <br /> for your <span className='font-bold'>business</span>.
      </h1>
      <p className='text-grey text-[1rem] leading-[28px] tracking-[0.09px] mb-8'>
        Our marketing and sales automation help you scale your outreach to get
        more leads for your company.
      </p>
      <p className='mb-14'>
        <Button buttonLabel='Request Beta Access' />
      </p>
      <div className='mb-14'>
        <Image
          src='/image-hero-landscape.png'
          width={343}
          height={240}
          alt='mobile phone'
        />
      </div>

      <Stats />
    </section>
  );
}

export default Hero;
