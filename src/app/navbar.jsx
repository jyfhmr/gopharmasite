import "./navbar.css"
import Link from "next/link"
export default function Navbar() {

    return <header>
        <div>
            <img src="https://gopharma.com.ve/wp-content/uploads/2024/04/Logo-GoPharma-Rif-Vector.png" width={"50px"}></img>
        </div>
        <div id="header_2">
            <div>
                asd
            </div>
            <div>
                <Link href="/">Inicio</Link>
            </div>
            <div>
                <Link href="/">Sobre Nosotros</Link>
            </div>
            <div>
                <Link href="/">Servicios</Link>
            </div>
            <div>
                <Link href="/">App Movil</Link>
            </div>
            <div>
                <Link href="/">Whatsapp</Link>
            </div>
        </div>
    </header>


}