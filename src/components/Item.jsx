import React from "react";

function Item(props) {
    return (
            <div className="menud-item">
                {props.name}
            </div>
        );
}

export default Item;