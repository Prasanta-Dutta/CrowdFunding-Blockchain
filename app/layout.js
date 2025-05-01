import localFont from "next/font/local";
import "./globals.css";
import { NavBar, Footer } from "@/components";

export const metadata = {
  title: "Donator",
  description: "A Blockchain Based Crowdfunding Platform",
};

export default function RootLayout({ children }) {
  return (
    <>
      
      <html lang="en">
        <body className={`antialiased`}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
      </>
  );
}
