import React from "react";
import Item from './Item';
function OpenedMenu(){
    return(
        <div className="menu-items">
            <Item name="Mac"/>
            <Item name="iphone"/>
            <Item name="ipad"/>
            <Item name="iwatch"/>
            <Item name="Support"/>
        </div>
    );
}

export default OpenedMenu;