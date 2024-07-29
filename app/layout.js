/** @format */

import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Suite landing page | Frontend Mentor",
  description:
    "Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative bg-cream-white font-sans text-dark-blue">
        <div className="absolute bottom-0 -z-20 h-[26.25rem] w-full bg-cream"></div>
        <div className="m-auto px-4 pt-6 tablet:max-w-[689px] desktop:max-w-[1110px]">
          {children}
        </div>
      </body>
    </html>
  );
}
