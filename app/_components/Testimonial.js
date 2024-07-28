/** @format */

import Image from "next/image";
import jeremyImage from "@/public/image-jeremy-large@2x.webp";
import curvedLine from "@/public/pattern-curved-line-2.svg";
// import blur from "@/public/pattern-blur.svg";

function Testimonial() {
  return (
    <div className="relative top-[3.5rem] -mx-[1rem] px-4 pb-16 text-cream-white desktop:mx-0 desktop:px-28 desktop:pb-0">
      {/* Dark blue Background */}
      <div className="absolute bottom-0 left-0 -z-10 h-[79%] w-full rounded-[15px] bg-dark-blue desktop:h-[95%]">
        &nbsp;
      </div>
      {/* End dark blue background */}
      <div className="flex flex-col items-center bg-[url('/pattern-blur.svg')] bg-[length:60%] bg-[top_25%_left_55%] bg-no-repeat desktop:flex-row desktop:gap-12 desktop:bg-left-bottom">
        <div className="relative h-[402px] w-[252px] desktop:h-[600px] desktop:w-[375px]">
          <Image
            src={jeremyImage}
            className="object-contain"
            fill
            alt="Image of Jeremy Robinson"
            sizes="(max-width: 1440px) 252px, 375px"
          />
        </div>
        <div className="relative mt-10 h-[40px] w-[49px] desktop:mt-0">
          <Image src={curvedLine} alt="Decorative curved line" fill />
        </div>
        <blockquote className="flex flex-col items-center desktop:w-[41%] desktop:items-start">
          <h3 className="mt-[2.3125rem] text-[2.5rem] leading-[1.2] tracking-[-0.42px] desktop:mt-8">
            It just <span className="font-bold">works.</span>
          </h3>
          <p className="mt-[2.3125rem] text-center text-[1.125rem] leading-[1.7778] tracking-[0.09px] desktop:text-left">
            “I really like how it is an all-in-one solution that handle many of
            the tasks that you would normally need separate tools to do the same
            job. This thing is a miracle worker.”
          </p>
          <p className="mt-[2.3125rem] text-[1.125rem] font-bold uppercase leading-[1.7778] -tracking-[0.18px]">
            Jeremy Robinson
          </p>
          <p className="text-sm uppercase">CMO, Fylo</p>
        </blockquote>
      </div>
    </div>
  );
}

export default Testimonial;
