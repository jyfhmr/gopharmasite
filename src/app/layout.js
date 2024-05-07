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
    function handleScrollEvent(e) {
      handleScrollDown(e);
    }

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
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
