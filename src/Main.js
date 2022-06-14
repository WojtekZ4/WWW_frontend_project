import React from "react";
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import {NumbersFactsTrivia, NumbersFactsMath, NumbersFactsYear, NumbersFactsDate} from "./NumbersFacts";
import Table from "./Mathematicians_Table";
import './index.css'

function Main() {

    return (
        <HashRouter>
            <div className="top_menu">
                <div className="header">
                    <h1>Dupa</h1>
                    <div id="horizontalmenu">
                        <ul className="horizontal-list">
                            <li>
                                <NavLink className="real_link" exact to="/">Home</NavLink>
                            </li>
                            <li>
                                <a className="empty_link" href="javascript:void(0)">Interesting numbers</a>
                                <ul className="vertical-list-1">
                                    <li>
                                        <a className="empty_link" href="javascript:void(0)">Even</a>
                                        <ul className="vertical-list-2">
                                            <li>
                                                <NavLink className="real_link" exact to="/page2">1</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="real_link" exact to="/page3">2</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="real_link" exact to="/page4">3</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="empty_link" href="javascript:void(0)">Odd</a>
                                        <ul className="vertical-list-2">
                                            <li>
                                                <NavLink className="real_link" exact to="/page2">1</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="real_link" exact to="/page3">2</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="real_link" exact to="/page4">3</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="empty_link" href="javascript:void(0)">Other</a>
                                        <ul className="vertical-list-2">
                                            <li>
                                                <NavLink className="real_link" exact to="/page2">21</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="real_link" exact to="/page3">22</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="real_link" exact to="/page4">23</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="empty_link" href="javascript:void(0)">Interactive</a>
                                <ul className="vertical-list-1">
                                    <li>
                                        <NavLink className="real_link" exact to="/page6">Famous Mathematicians</NavLink>
                                    </li>
                                    <li>
                                        <a className="empty_link" href="javascript:void(0)">Fun Facts</a>
                                        <ul className="vertical-list-2">
                                            <li>
                                                <NavLink className="real_link" exact to="/facts/trivia">Trivia</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="real_link" exact to="/facts/math">Math</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="real_link" exact to="/facts/year">Year</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="real_link" exact to="/facts/date">Date</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/page2" element={<Page2/>}/>
                        <Route exact path="/page3" element={<Page3/>}/>
                        <Route exact path="/page4" element={<Page4/>}/>
                        <Route exact path="/facts/trivia" element={<NumbersFactsTrivia/>}/>
                        <Route exact path="/facts/math" element={<NumbersFactsMath/>}/>
                        <Route exact path="/facts/year" element={<NumbersFactsYear/>}/>
                        <Route exact path="/facts/date" element={<NumbersFactsDate/>}/>
                        <Route exact path="/page6" element={<Table/>}/>
                    </Routes>
                </div>
                <div className="footer">
                </div>
            </div>
        </HashRouter>);
}

export default Main;

// {/*<ul className="header">*/}
// {/*    <li><NavLink exact to="/">Home</NavLink></li>*/}
// {/*    <li><NavLink exact to="/page2">Page2</NavLink></li>*/}
// {/*    <li><NavLink exact to="/page3">Page3</NavLink></li>*/}
// {/*    <li><NavLink exact to="/page4">Page4</NavLink></li>*/}
// {/*    <li><NavLink exact to="/page5">NumbersFacts</NavLink></li>*/}
// {/*    <li><NavLink exact to="/page6">Mathematicians_Table</NavLink></li>*/}
// {/*</ul>*/}