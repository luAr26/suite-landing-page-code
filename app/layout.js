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
    <html lang='en'>
      <head></head>
      <body className='h-screen font-sans bg-cream-white text-dark-blue'>
        <div className='px-4 py-6 tablet:max-w-[689px] desktop:max-w-[1110px] m-auto'>
          {children}
        </div>
      </body>
    </html>
  );
}
