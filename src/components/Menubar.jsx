import React from 'react';

function Menubar(props) {
    const {menu,setMenu} = props;
    const open=() => {
        if(menu==="open")
        {
            setMenu("close");
        }
        else {
            setMenu("open");
        }
    }
    return (
        <div className = "left">
            <img src={require('../assets/menu.png')} onClick={open} className="logo logo-size-menu menu-icon" alt="menu-logo"/>
            <div className = "left-1">
                <img src={require('../assets/facebook.png')} className="logo logo-size-menu" alt="facebook-logo"/>
                <img src={require('../assets/twitter.png')} className="logo logo-size-menu" alt="twitter-logo"/>
                <img src={require('../assets/linkedin.png')} className="logo logo-size-menu" alt="linkedin-logo"/>
            </div>
        </div>
    );
}

export default Menubar;