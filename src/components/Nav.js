import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";
import React from "react";

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '16px'
    },
    bmBurgerBars: {
      background: '#000'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: '0'
    },
    bmMenu: {
      background: '#eee',
      boxShadow: '-1px 0px 8px 0px rgba(0,0,0,0.75)',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block',
      width: '100%',
      padding: '10px'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
};

export default () => {
    return (
        <nav className="nav-navigation">
            <ul className="navigation-tabs">
                <li>
                    <Link to="/" activeClassName="active">Strona główna</Link>
                </li>
                <li>
                    <Link to="/news" activeClassName="active">Aktualności</Link>
                </li>
                <li>
                    <Link to="/regulations" activeClassName="active">Regulamin</Link>
                </li>
                <li>
                    <Link to="/map-and-contact" activeClassName="active">Mapa i kontakt</Link>
                </li>
                <li>
                    <Link to="/gallery" activeClassName="active">Galeria</Link>
                </li>
                <li>
                    <Link to="/price-list" activeClassName="active">Cennik</Link>
                </li>
                <li className="hamburger">
                    <Menu right styles={ styles }>
                        <Link to="/" activeClassName="active">Strona główna</Link>
                        <Link to="/news" activeClassName="active">Aktualności</Link>
                        <Link to="/regulations" activeClassName="active">Regulamin</Link>
                        <Link to="/map-and-contact" activeClassName="active">Mapa i kontakt</Link>
                        <Link to="/gallery" activeClassName="active">Galeria</Link>
                        <Link to="/price-list" activeClassName="active">Cennik</Link>
                    </Menu>
                </li>
                {/* <li>Rodzaje ryb</li> */}
            </ul>
        </nav>
        // <nav className="navbar navbar-default">
        //     <div className="container-fluid">
        //         <div className="navbar-header">
        //             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        //                 <span className="sr-only">Toggle navigation</span>
        //                 <span className="icon-bar"></span>
        //                 <span className="icon-bar"></span>
        //                 <span className="icon-bar"></span>
        //             </button>
        //             <a className="navbar-brand" href="/">Brand</a>


        //             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

        //                 <ul className="nav navbar-nav">
        //                     <li className="active"><a href="/">Link <span className="sr-only">(current)</span></a></li>
        //                     <li><a href="/">Link</a></li>
        //                     <li className="dropdown">
        //                         <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
        //                         <ul className="dropdown-menu">
        //                             <li><a href="/">Action</a></li>
        //                             <li><a href="/">Another action</a></li>
        //                             <li><a href="/">Something else here</a></li>
        //                             <li role="separator" className="divider"></li>
        //                             <li><a href="/">Separated link</a></li>
        //                             <li role="separator" className="divider"></li>
        //                             <li><a href="/">One more separated link</a></li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //                 <form className="navbar-form navbar-left">
        //                     <div className="form-group">
        //                         <input type="text" className="form-control" placeholder="Search" />
        //                     </div>
        //                     <button type="submit" className="btn btn-default">Submit</button>
        //                 </form>
        //                 <ul className="nav navbar-nav navbar-right">
        //                     <li><a href="/">Link</a></li>
        //                     <li className="dropdown">
        //                         <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
        //                         <ul className="dropdown-menu">
        //                             <li><a href="/">Action</a></li>
        //                             <li><a href="/">Another action</a></li>
        //                             <li><a href="/">Something else here</a></li>
        //                             <li role="separator" className="divider"></li>
        //                             <li><a href="/">Separated link</a></li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //             </div>

        //         </div>
        //     </div>
        // </nav>
    )
}