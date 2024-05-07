"use client"
import Link from "next/link";
import Navbar from "./navbar";
import "./layoutstyles.css";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [scroll, setScroll] = useState(0);

  function handleScrollDown(e) {
    console.log(e);
    setScroll(window.scrollY);
  }

  useEffect(() => {
 
    window.addEventListener("scroll", handleScrollDown);

    return () => {
      window.removeEventListener("scroll", handleScrollDown);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar scroll={scroll} />
        {children}
      </body>
    </html>
  );
}
