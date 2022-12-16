import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <div className="header-zoo">ZOO</div>
                    <nav className="nav">
                        <div className="Header-nav">About</div>
                        <div className="Header-nav">Zoos</div>
                        <div className="Header-nav">Map</div>
                        <div className="Header-nav">Contact Us</div>
                        <div className="Header-nav">Design</div>
                    </nav>
                    <div>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;