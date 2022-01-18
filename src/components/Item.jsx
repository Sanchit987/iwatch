import React from "react";

function Item(props) {
    return (
            <div className={props.className}>
                {props.name}
            </div>
        );
}

export default Item;