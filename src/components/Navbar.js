import React from 'react';
import '../styles/Navbar.css';

class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <img
                    className="stackline-logo"
                    src="https://image4.owler.com/logo/stackline_owler_20170129_010716_original.png"
                    alt="stackline"
                >
                </img>
            </div>
        )
    }
}

export default Navbar;