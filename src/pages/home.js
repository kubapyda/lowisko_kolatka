import Footer from '../components/Footer';
import Nav from "../components/Nav";
import React from "react";

export default () => {
    return (
        <main className="main home">
            <div className="navigation">
                <Nav></Nav>
                <header className="title">Łowisko Kołatka</header>
                <Footer></Footer>
            </div>
        </main>
    )
}
