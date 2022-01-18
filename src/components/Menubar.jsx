import React from 'react';

function Menubar() {

    return (
        <div>
        <div className = "left">
            <img src={require('../assets/menu.png')} className="logo logo-size-menu menu-icon" />
            <div className = "left-1">
                <img src={require('../assets/facebook.png')} className="logo logo-size-menu" />
                <img src={require('../assets/twitter.png')} className="logo logo-size-menu" />
                <img src={require('../assets/linkedin.png')} className="logo logo-size-menu" />
            </div>
        </div>
        </div>
    );
}

export default Menubar;