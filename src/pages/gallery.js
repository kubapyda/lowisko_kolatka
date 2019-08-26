import Footer from '../components/Footer';
import ImageGallery from 'react-image-gallery';
import Nav from "../components/Nav";
import React from "react";

const images = [
    {
      original: 'https://i.ibb.co/mJNFLdn/1.jpg',
      thumbnail: 'https://i.ibb.co/HpJ9nst/1.jpg',
    },
    {
      original: 'https://i.ibb.co/TWfDnV1/2.jpg',
      thumbnail: 'https://i.ibb.co/Dt9XjrV/2.jpg',
    },
    {
      original: 'https://i.ibb.co/Pw1Qd6b/3.jpg',
      thumbnail: 'https://i.ibb.co/sJCx12G/3.jpg',
    },
    {
      original: 'https://i.ibb.co/n1L6xBH/4.jpg',
      thumbnail: 'https://i.ibb.co/7Vq3TP2/4.jpg',
    },
    {
      original: 'https://i.ibb.co/hWGS6Q5/5.jpg',
      thumbnail: 'https://i.ibb.co/301rjsL/5.jpg',
    }
];

export default () => {
    return (
        <main className="main">
            <Nav></Nav>
            <div className="container regulations">
                <ImageGallery items={images} />
            </div>
            <Footer></Footer>
        </main>
    )
}