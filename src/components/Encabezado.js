import React from "react"
import logo from '../assets/img/logo-DH.png';

function Encabezado (){
    return(
        <div>
            <header className="encabezado">
                <nav id="logo">
                    <a href="#"><img src={logo} alt="Logo Digital House"/></a>
                </nav>
                <nav id="opciones">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#productos">Productos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Encabezado; 