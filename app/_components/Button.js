/** @format */

import Link from "next/link";

function Button({ buttonLabel }) {
  return (
    <Link
      href="/"
      className="inline-block rounded-md border px-[1.362em] py-[0.786em] text-[0.875rem] font-bold leading-[1.71428] text-dark-blue"
    >
      {buttonLabel}
    </Link>
  );
}

export default Button;
