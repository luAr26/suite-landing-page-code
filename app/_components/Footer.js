import Link from "next/link";

import Logo from "@/app/_components/Logo";
import FacebookIcon from "@/app/_components/FacebookIcon";
import TwitterIcon from "@/app/_components/TwitterIcon";
import InstagramIcon from "@/app/_components/InstagramIcon";

function Footer() {
  return (
    <footer className="relative z-0 mt-28 flex flex-col items-center justify-between gap-[2.0625rem] bg-cream pb-20 tablet:flex-row tablet:pb-[4.5rem]">
      <Logo />
      <p className="text-footer text-grey">&copy; Copyright - Suite</p>
      <div className="flex items-center gap-7">
        <Link
          href="https://www.facebook.com/login/"
          target="_blank"
          className="social-link"
        >
          <FacebookIcon />
        </Link>
        <Link
          href="https://x.com/?lang=en"
          target="_blank"
          className="social-link"
        >
          <TwitterIcon />
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          className="social-link"
        >
          <InstagramIcon />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
