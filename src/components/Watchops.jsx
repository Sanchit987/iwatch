import React from 'react';

function Watchops(props){
    return (
        <div className="parent">
            <div className={props.className}>
            <img src={props.src} className = "watch-align"/>
            </div>
        </div>
    );
}

export default Watchops;