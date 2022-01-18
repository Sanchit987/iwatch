import React from "react";

function Button(props) {
    return(
        <div className={props.className} type="button">{props.name}</div>
    );
}

export default Button;