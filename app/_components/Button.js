/** @format */

import Link from "next/link";

function Button({ buttonLabel }) {
  return (
    <Link
      href='/'
      className='inline-block px-[26px] py-[10px] font-bold leading-8 border-2 rounded-md text-dark-blue hover:bg-dark-blue hover:text-cream-white transition-colors duration-150'
    >
      {buttonLabel}
    </Link>
  );
}

export default Button;
