import React from 'react';
import headercss from './header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <headercss/>
            <div className="container">
            <div className="content_header">
                <img src="https://svetofor.info/images/svetofor_logo_192.png" alt=""/>
                <input placeholder={'например'} type="text"/>
                <ul>
                    <li><Link to={"/Iphone"}>айфон</Link></li>
                    <li><Link to={'/Samsung'}>Samsung</Link></li>
                </ul>
            </div>
            </div>
        </header>
    );
};

export default Header;