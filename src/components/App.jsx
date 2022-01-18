import React from "react";
import Landing from "./Landing";
import Menubar from "./Menubar";
function App() {
    return (
            <div class="row">
                <div className="left">
                    <Menubar />
                </div>
                <div className="base">
                    <Landing /> 
                </div>
            </div>
        );
}

export default App;