import React from "react";

function Icon(props) {
    return (
            <img src={props.src} className={props.className} />
        );
}

export default Icon;