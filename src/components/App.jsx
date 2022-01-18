import React, { useState } from "react";
import Landing from "./Landing";
import Menubar from "./Menubar";
import OpenedMenu from "./OpenedMenu";

function App() {
    const [menu,setMenu] = useState("close");
    return (
            <div className="row" data-menu = {menu}>
                <div className="menud">
                    <OpenedMenu />
                </div>
                <div className="left">
                    <Menubar menu={menu} setMenu={setMenu}/>
                </div>
                <div className="base">
                    <Landing /> 
                </div>
            </div>
        );
}

export default App;