/** @format */

import { buttonVariants } from "@/app/_components/Button";
import Image from "next/image";
import Stats from "./Stats";
import heroImage from "@/public/image-hero-landscape@2x.webp";
import Link from "next/link";

function Hero() {
  // Example background position: bg-[right_13vw_top_20%]
  return (
    <div className="flex flex-col desktop:flex-row desktop:items-center desktop:gap-24">
      <section className="tablet:bg-hero-section mt-14 bg-[length:281px_482px] bg-right-top bg-no-repeat tablet:mt-[5rem] tablet:pb-[3rem] desktop:grow desktop:pb-[5rem]">
        <h1 className="bg-pattern-curved-line-1 inline-block bg-[length:151px_19px] bg-right-top bg-no-repeat pt-5 text-[2.375rem] leading-[1.1578] tablet:mt-[2.625rem] tablet:bg-[length:231px_29px] tablet:bg-[right_1.75rem_top] tablet:pt-10 tablet:text-[4rem]">
          A <span className="font-bold">super solution</span> <br />
          for your <span className="font-bold">business.</span>
        </h1>
        <p className="mt-8 text-[1rem] leading-[1.75] tracking-[0.09px] text-grey tablet:w-[55%]">
          Our marketing and sales automation help you scale your outreach to get
          more leads for your company.
        </p>
        <p className="mt-8">
          <Link href="/" className={buttonVariants()}>
            Request Beta Access
          </Link>
        </p>
        <div className="relative mt-14 h-[240px] w-full overflow-hidden rounded-[15px] tablet:hidden">
          <Image
            src={heroImage}
            alt="mobile phone on nice background"
            fill
            className="object-cover"
            // priority
            placeholder="blur"
            sizes="(max-width: 767px) calc(100vw - 32px)"
          />
        </div>
      </section>
      <Stats />
    </div>
  );
}

export default Hero;
