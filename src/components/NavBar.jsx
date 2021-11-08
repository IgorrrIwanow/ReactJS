import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

const NavBar = () => {

    return (
        <div className="navBar">
            <Link to="/chats" className="navBar-link">Список чатов</Link>
            <Link to="/profile" className="navBar-link">Профиль</Link>
            <Link to="/" className="navBar-link">Домашняя страница</Link>
        </div>
       
    )
}

export default NavBar;