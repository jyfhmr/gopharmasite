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
          <Link href="/" className="linksDeHeader">Inicio</Link>
        </div>
        <div>
          <Link href="/about" className="linksDeHeader">Sobre Nosotros</Link>
        </div>
        <div>
          <Link href="/services" className="linksDeHeader">Servicios</Link>
        </div>
        <div>
          <Link href="/movilapp" className="linksDeHeader">App Movil</Link>
        </div>
        <div>
          <Link href="/whatsapp" className="linksDeHeader">Whatsapp</Link>
        </div>
      </div>
    </header>
  );
}
