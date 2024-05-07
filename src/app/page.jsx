import Link from "next/link";
import "./page.css";
import { Button, Flex } from "antd";

export default function HomePage() {
  return (
    <div id="firstDiv">
      <div id="firstDiv_1">
        <div id="firstDiv_1_1"># EL SOFTWARE N° 1 EN VENEZUELA</div>
        <div id="firstDiv_1_2">
          GoPharma es una empresa enfocada en impulsar el crecimiento de las
          farmacias independientes en Venezuela.
        </div>
        <div id="firstDiv_1_3">
          La gestión de medicamentos nunca había sido tan sencilla y segura.
          Descarga nuestra aplicación móvil y comienza a disfrutar de los
          beneficios de comprar tus medicamentos desde la comodidad de tu hogar,
          ahorrando tiempo y con la tranquilidad de estar adquiriendo productos
          de calidad.
        </div>
        <div id="firstDiv_1_4">
          <Button type="primary" className="ButtonsInicio">
            <Link href="/about">Sobre Nosotros</Link>
          </Button>
          <Button type="primary" className="ButtonsInicio">
            <Link href="/services">Nuestros Servicios</Link>
          </Button>
        </div>
      </div>
      <div id="firstDiv_2"></div>
    </div>
  );
}
