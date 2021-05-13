import React, { Component } from "react";
import {Link} from 'react-router-dom';



class MenuSuperior extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">ReinoApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                   <Link to="/Lideres" className="navbar-brand"id="link">Líderes</Link>
                    </li>
                    <li className="nav-item">
                   <Link to="/Membros" className="navbar-brand"id="link">Membros</Link>
                    </li>
                    <li className="nav-item">
                    <a  id="link"href="/" className="navbar-brand">Relatótios</a>
                    </li>
                  </ul>
                </div>
            </nav>
        );
    }
}

export default MenuSuperior;