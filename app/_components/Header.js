/** @format */

import Image from "next/image";
import Button from "./Button";

function Header() {
  return (
    <header className='flex items-center justify-between'>
      <Image src='logo.svg' alt='logo' width={81} height={32} />
      <Button buttonLabel='Request Beta Access' />
    </header>
  );
}

export default Header;
