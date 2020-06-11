import Footer from '../components/Footer';
import ImageGallery from 'react-image-gallery';
import Nav from "../components/Nav";
import React from "react";
import imagesData from "../data/galeria.json";

const images = imagesData.galeria.map(({zdjecie, miniaturka}) => ({
  original: zdjecie,
  thumbnail: miniaturka
}));

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