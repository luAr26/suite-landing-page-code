/** @format */

import Button from "@/app/_components/Button";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Button buttonLabel="Request Beta Access" />
    </header>
  );
}

export default Header;
