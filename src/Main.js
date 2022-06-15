import React from "react";
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Number2 from "./numbers/Number2";
import Number3 from "./numbers/Number3";
import Number5 from "./numbers/Number5";
import Number17 from "./numbers/Number17";
import NumberPi from "./numbers/NumberPi";
import NumberPhi from "./numbers/NumberPhi";
import Numbere from "./numbers/Numbere";
import NumberInf from "./numbers/NumberInf";
import Number0_9 from "./numbers/Number0_9";
import NumberGoogol from "./numbers/NumberGoogol";
import {NumbersFactsDate, NumbersFactsMath, NumbersFactsTrivia, NumbersFactsYear} from "./interactive/NumbersFacts";
import Table from "./interactive/Mathematicians_Table";
import './index.css'

function Main() {

    return (<HashRouter>
        <div className="top_menu">
            <div className="header">
                <h1>Math is fun!</h1>
                <div id="horizontalmenu">
                    <ul className="horizontal-list">
                        <li>
                            <NavLink className="real_link" to="/">Home</NavLink>
                        </li>
                        <li>
                            <a className="empty_link" href="#" onClick={e => e.preventDefault()}>Interesting
                                numbers</a>
                            <ul className="vertical-list-1">
                                <li>
                                    <a className="empty_link" href="#" onClick={e => e.preventDefault()}>Prime</a>
                                    <ul className="vertical-list-2">
                                        <li>
                                            <NavLink className="real_link" to="/numbers/2">2</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="real_link" to="/numbers/3">3</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="real_link" to="/numbers/5">5</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="real_link" to="/numbers/17">17</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="empty_link" href="#"
                                       onClick={e => e.preventDefault()}>Irrational</a>
                                    <ul className="vertical-list-2">
                                        <li>
                                            <NavLink className="real_link" to="/numbers/pi">Pi</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="real_link" to="/numbers/phi">Phi</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="real_link" to="/numbers/e">e</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="empty_link" href="#" onClick={e => e.preventDefault()}>Other</a>
                                    <ul className="vertical-list-2">
                                        <li>
                                            <NavLink className="real_link"
                                                     to="/numbers/inf">Infinity</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="real_link" to="/numbers/0_9">0.(9)</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="real_link"
                                                     to="/numbers/googol">Googol</NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="empty_link" href="#" onClick={e => e.preventDefault()}>Interactive</a>
                            <ul className="vertical-list-1">
                                <li>
                                    <NavLink className="real_link" to="/famous-mathematicians">Famous Mathematicians</NavLink>
                                </li>
                                <li>
                                    <a className="empty_link" href="#" onClick={e => e.preventDefault()}>Fun
                                        Facts</a>
                                    <ul className="vertical-list-2">
                                        <li>
                                            <NavLink className="real_link" to="/facts/trivia">Trivia</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="real_link" to="/facts/math">Math</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="real_link" to="/facts/year">Year</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="real_link" to="/facts/date">Date</NavLink>
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
                    <Route exact path="/numbers/2" element={<Number2/>}/>
                    <Route exact path="/numbers/3" element={<Number3/>}/>
                    <Route exact path="/numbers/5" element={<Number5/>}/>
                    <Route exact path="/numbers/17" element={<Number17/>}/>
                    <Route exact path="/numbers/pi" element={<NumberPi/>}/>
                    <Route exact path="/numbers/phi" element={<NumberPhi/>}/>
                    <Route exact path="/numbers/e" element={<Numbere/>}/>
                    <Route exact path="/numbers/inf" element={<NumberInf/>}/>
                    <Route exact path="/numbers/0_9" element={<Number0_9/>}/>
                    <Route exact path="/numbers/googol" element={<NumberGoogol/>}/>
                    <Route exact path="/facts/trivia" element={<NumbersFactsTrivia/>}/>
                    <Route exact path="/facts/math" element={<NumbersFactsMath/>}/>
                    <Route exact path="/facts/year" element={<NumbersFactsYear/>}/>
                    <Route exact path="/facts/date" element={<NumbersFactsDate/>}/>
                    <Route exact path="/famous-mathematicians" element={<Table/>}/>
                </Routes>
            </div>
            <div className="footer"/>
        </div>
    </HashRouter>);
}

export default Main;