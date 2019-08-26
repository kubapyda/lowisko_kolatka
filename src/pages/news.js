import Footer from '../components/Footer';
import Nav from "../components/Nav";
import React from "react";

const news = [{
    addDate: '28-05-2019',
    title: 'Otwarcie sezonu!',
    content: 'Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor'
}, {
    addDate: '19-08-2019',
    title: 'Zawody rybak roku!',
    content: 'Vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque'
}];

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