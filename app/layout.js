/** @format */

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suite landing page | Frontend Mentor",
  description:
    "Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
