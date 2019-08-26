import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";

import Footer from '../components/Footer';
import Nav from "../components/Nav";
import React from "react";

function Map() {
    return <GoogleMap
        defaultZoom={30}
        defaultCenter={{ lat: 53.858126, lng: 15.937954 }}
    >
        <Marker position={{lat: 53.858126, lng: 15.937954 }} />
    </GoogleMap>
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default () => {
    return (
        <main className="main">
            <Nav></Nav>
            <div className="container regulations" style={{ height: '720px' }}>
                <h1>Kontakt</h1>
                <p>
                    <span style={{ 'font-weight': 'bold' }}>Gospodarz łowiska:</span> Marek
                </p>
                <p>
                    <span style={{ 'font-weight': 'bold' }}>Tel.:</span> 507 395 636
                </p>
                <p>
                    <span style={{ 'font-weight': 'bold' }}>E-mail:</span> lowiskokolatka@gmail.com
                </p>

                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDeZVPuoNAEWqL4I1s3loGOiz6xcW3QqmA`}
                    loadingElement={<div style={{height: '85%'}}></div>}
                    containerElement={<div style={{height: '85%'}}></div>}
                    mapElement={<div style={{height: '85%'}}></div>}
                />
            </div>
            <Footer></Footer>
        </main>
    )
}