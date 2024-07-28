import Logo from "@/app/_components/Logo";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative z-0 mt-28 flex items-center justify-between">
      <Logo />
      <p className="text-footer text-grey">&copy; Copyright - Suite</p>
      <div>
        <Link href="/">Facebook</Link>
        <Link href="/">Twitter</Link>
        <Link href="/">Instagram</Link>
      </div>
    </footer>
  );
}

export default Footer;
