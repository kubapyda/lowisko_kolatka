import Footer from '../components/Footer';
import Nav from "../components/Nav";
import React from "react";
import newsData from '../data/aktualnosci.json';

const news = newsData.aktualnosci.map(({data_dodania, tytul, tresc}) => ({
    addDate: data_dodania,
    title: tytul,
    content: tresc
}));

export default () => {
    return (
        <main className="main">
            <Nav></Nav>
            {
                news.map(({addDate, title, content}) => (
                    <div className="container regulations">
                        <h2>{title}</h2>
                        <p style={{ 'font-style': 'italic' }}>
                            <span>Dodano: </span>
                            <span>{addDate}</span>
                        </p>
                        <p>{content}</p>
                    </div>
                ))
            }
            <Footer></Footer>
        </main>
    )
}