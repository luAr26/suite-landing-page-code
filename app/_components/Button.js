/** @format */

import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-block rounded-md border px-[1.17857em] py-[0.85714em] text-[0.875rem] font-bold leading-[1.71428] tracking-[-0.14px] tablet:text-[1rem] tablet:leading-[2] tablet:px-[1.53125em] tablet:py-[0.75em]",
  {
    variants: {
      intent: {
        // background: linear-gradient(135deg, #A060FF 0%, #CB30E3 49%, #FFA84E 100%);
        primary:
          "bg-dark-blue text-cream-white hover:bg-gradient-to-r from-[#A060FF] via-[#CB30E3] to-[#FFA84E]",
        outline:
          "bg-transparent text-dark-blue hover:bg-dark-blue hover:text-cream-white",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);

function Button() {
  return <div>Button</div>;
}

export default Button;
