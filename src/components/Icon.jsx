import React from "react";

function Icon(props) {
    return (
            <img src={props.src} className={props.className} alt="apple-logo"/>
        );
}

export default Icon;