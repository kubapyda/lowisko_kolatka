import Footer from '../components/Footer';
import Nav from "../components/Nav";
import React from "react";

import priceListData from "../data/cennik.json";

const priceList = priceListData.lista_cen.map(({cena, za, czas, opis}) => ({
    price: cena,
    by: za,
    time: czas,
    description: opis
}));

const fishes = priceListData.ryby.map(({cena, nazwa, nie_placimy}) => ({
    price: cena,
    name: nazwa,
    notPaidFish: nie_placimy
}));

export default () => {
    return (
        <main className="main">
            <Nav></Nav>
            <div className="container regulations">
                <h1>Cennik Łowiska Kołatka</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Cena</th>
                            <th>Za</th>
                            <th>W godzinach</th>
                            <th>Opis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            priceList.map(({price, by, time, description}) => {
                                return (
                                    <tr>
                                        <td>{price}</td>
                                        <td>{by}</td>
                                        <td>{time}</td>
                                        <td>{description}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <table className="table">
                    <thead>
                        <tr>
                            <th colspan="2" style={{ width: '50%' }}>Cena za 1kg ryby</th>
                            <th>Ryby za które nie płacimy (limit 2kg łącznie)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fishes.map(({price, name, notPaidFish}) => (
                                <tr>
                                    <td style={{ width: '55px' }}>{price}</td>
                                    <td style={{ width: 'calc(50% - 55px)' }}>{name}</td>
                                    <td style={{ width: 'calc(50% - 55px)' }}>{notPaidFish}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <p>* Ryb powyżej 3kg nie sprzedajemy</p>
            </div>
            <Footer></Footer>
        </main>
    )
}
