import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light p-3 ">
                    <div className="container-fluid">
                        <Link to="#" className="navbar-brand  logo" >
                            <img src="https://i.ibb.co/r4Z5fVF/logo-2.png" alt="" className="img-fluid" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
                            <ul className="navbar-nav top-menu   mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link" >Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link" >Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link" >Contact</Link>
                                </li>

                               

                            </ul>
                          
                        </div>
                        <div className="d-flex ">
                            <Link to ="#" className="me-3 user_top">
                            <FontAwesomeIcon icon={faUser} />
                            </Link>
                            <Link to ="#"className="me-3 cart_top">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <p className="cart_number">3</p>
                            </Link>
                            
                                           
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Menu;