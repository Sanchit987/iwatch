import React from "react";
import Item from './Item';
function OpenedMenu(){
    return(
        <div className="menu-items">
            <Item name="Mac" className="menud-item"/>
            <Item name="iphone" className="menud-item" />
            <Item name="ipad" className="menud-item" />
            <Item name="iwatch" className="menud-item selected-item"/>
            <Item name="Support" className="menud-item"/>
        </div>
    );
}

export default OpenedMenu;