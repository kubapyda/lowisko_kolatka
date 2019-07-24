import { Link } from "gatsby";
import React from "react";

export default () => {
    return (
        <nav>
            <ul className="navigation-tabs">
                <li className="active">
                    <Link to="/">Strona główna</Link>
                </li>
                <li>
                    <Link to="/news">Aktualności</Link>
                </li>
                <li>
                    <Link to="/regulations">Regulamin</Link>
                </li>
                <li>Kontakt</li>
                <li>Mapa</li>
                <li>Galeria</li>
                <li>Cennik</li>
                <li>Rodzaje ryb</li>
            </ul>
        </nav>
    )
}