import React from "react";
import Round from "./Round";

function Navigator(props){
    return (
        <div className= "colornavigator">
            <div className="dot"></div>
            <Round className="round a-color"/>
            <Round className="round b-color"/>
            <Round className="round c-color"/>
            <Round className="round d-color"/>
        </div>
    );
}

export default Navigator;