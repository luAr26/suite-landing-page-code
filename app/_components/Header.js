/** @format */

import Logo from "@/app/_components/Logo";
import Link from "next/link";
import { buttonVariants } from "@/app/_components/Button";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Link href="/" className={buttonVariants({ intent: "outline" })}>
        Request Beta Access
      </Link>
    </header>
  );
}

export default Header;
