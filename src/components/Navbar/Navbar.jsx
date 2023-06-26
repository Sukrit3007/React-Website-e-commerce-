import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Person,FunnelSimple,ArrowsVertical } from "phosphor-react";
import './Navbar.css';
import logo from './GREENMIND.svg'


export const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="left-nav">
                <Link to="/">Home</Link>
                <Link to="/Products">Products</Link>
                <Link to="/Contacts">Contacts</Link>
            </div>
            <div className="right-nav">
                <Link to="/cart" > <ShoppingCart size={32}/> </Link>
                <Link to="/SignIn"> <Person size={32}/> </Link>
                <Link to="/SignIn"> <ArrowsVertical size={32}/> </Link>
                <Link to="/SignIn"> <FunnelSimple size={32}/> </Link>
                
            </div>
        </div>
    );
}