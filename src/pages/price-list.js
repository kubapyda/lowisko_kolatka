import Footer from '../components/Footer';
import Nav from "../components/Nav";
import React from "react";

const priceList = [{
    price: '20zł',
    by: 'Dzień',
    time: '6:00-21:00',
    description: 'Wędkowanie na 2 wędki'
}, {
    price: '5zł',
    by: 'Osoba towarzysząca',
    time: '6:00-21:00',
    description: ''
}, {
    price: '30zł',
    by: 'Noc',
    time: '18:00-6:00',
    description: 'Wędkowanie na 2 wędki'
}, {
    price: '10ł',
    by: 'Osoba towarzysząca',
    time: '18:00-6:00',
    description: ''
}, {
    price: '40zł',
    by: 'Doba',
    time: '6:00-6:00',
    description: 'Wędkowanie na 2 wędki'
}, {
    price: '10zł',
    by: 'Doba',
    time: '',
    description: 'Rozbicie namiotu'
}, {
    price: '10zł',
    by: '',
    time: '',
    description: 'Każda dodatkowa wędka'
}];

const fishes = [{
    price: '16zł',
    name: 'Karp',
    notPaidFish: 'Płoć'
}, {
    price: '16zł',
    name: 'Amur',
    notPaidFish: 'Wzdręga'
}, {
    price: '18zł',
    name: 'Lin',
    notPaidFish: 'Okoń'
}, {
    price: '10zł',
    name: 'Karaś',
    notPaidFish: ''
}, {
    price: '18zł',
    name: 'Szczupak',
    notPaidFish: ''
}, {
    price: '80zł',
    name: 'Węgorz',
    notPaidFish: ''
}];

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
