import React from 'react';

function Menubar() {

    return (
        <div>
        <div className = "left">
            <img src={require('../assets/menu.png')} className="logo logo-size-menu menu-icon" alt="menu-logo"/>
            <div className = "left-1">
                <img src={require('../assets/facebook.png')} className="logo logo-size-menu" alt="facebook-logo"/>
                <img src={require('../assets/twitter.png')} className="logo logo-size-menu" alt="twitter-logo"/>
                <img src={require('../assets/linkedin.png')} className="logo logo-size-menu" alt="linkedin-logo"/>
            </div>
        </div>
        </div>
    );
}

export default Menubar;