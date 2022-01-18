import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import Watch from "./Watch";
import Watchops from "./Watchops";
import Navigator from "./Navigator";

function Navbar() {
    return(
        <div className="land">
            <div className="nav-link">
            <div className="nav-left">
            <Icon src={require('../assets/apple-logo.png')} className="logo" />
            <Button name='Mac' className="mac button"/>
            <Button name='iPhone' className="iPhone button"/>
            <Button name='iPad' className="iPad button"/>
            <Button name='iWatch' className="iWatch button" />
            <Button name='Support' className="support button"/>
            </div>
            <div className="nav-right">
                <Icon src={require('../assets/magnify.png')} className="logo logo-size" />
                <p className='line'><b>  | </b></p>
                <Icon src={require('../assets/bag.png')} className="logo logo-size" />
            </div>
            </div>
            <div className="center">
                <div>
                <div className = "heading">
                    <p><b>The Perfect Moment</b><br /> Between Past And <br />Future</p>
                </div>
                <div className="buy-div">
                    <Button name='Buy Now' className="buy-button"/>
                </div>
                </div>
                <div className="alc">
                <Watch src={require('../assets/watch.png')}  className="watch-position" />
                <div className= "shadow"></div>
                <div className = "watchoption">
                    <Watchops src={require('../assets/greyWatch.png')} className='greyback'/>
                    <Watchops src={require('../assets/cyanWatch.png')} className='cyanback'/>
                    <Watchops src={require('../assets/babyPink.png')} className='pinkback'/>
                </div>
                </div>
                <Navigator />
            </div>
                
            
        </div>
    );
}

export default Navbar;