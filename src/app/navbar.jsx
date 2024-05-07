import { useState, useEffect } from "react";
import "./navbar.css";
import Link from "next/link";

export default function Navbar({ scroll }) {
  const [headerClass, setHeaderClass] = useState("headerClass");

  useEffect(() => {
    if (scroll === 0) {
      setHeaderClass("headerClass");
    } else {
      setHeaderClass("headerWhite");
    }
  }, [scroll]);

  return (
    <header className={headerClass}>
      <div>
        <img src="https://gopharma.com.ve/wp-content/uploads/2024/04/Logo-GoPharma-Rif-Vector.png" width={"50px"} />
      </div>
      <div id="header_2">
        <div>
          <Link href="/">Inicio</Link>
        </div>
        <div>
          <Link href="/about">Sobre Nosotros</Link>
        </div>
        <div>
          <Link href="/services">Servicios</Link>
        </div>
        <div>
          <Link href="/movilapp">App Movil</Link>
        </div>
        <div>
          <Link href="/whatsapp">Whatsapp</Link>
        </div>
      </div>
    </header>
  );
}
