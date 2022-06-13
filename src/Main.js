import React from "react";
import {
    Route,
    NavLink,
    HashRouter, Routes
} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import './index.css'

function Main(){
    return(
        <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Page1</NavLink></li>
                    <li><NavLink exact to="/page2">Page2</NavLink></li>
                    <li><NavLink exact to="/page3">Page3</NavLink></li>
                    <li><NavLink exact to="/page4">Page4</NavLink></li>
                    <li><NavLink exact to="/page5">Page5</NavLink></li>
                    <li><NavLink exact to="/page6">Page6</NavLink></li>
                </ul>
                <h1>lols</h1>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Page1/>}/>
                        <Route exact path="/page2" element={<Page2/>}/>
                        <Route exact path="/page3" element={<Page3/>}/>
                        <Route exact path="/page4" element={<Page4/>}/>
                        <Route exact path="/page5" element={<Page5/>}/>
                        <Route exact path="/page6" element={<Page6/>}/>
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}
export default Main;