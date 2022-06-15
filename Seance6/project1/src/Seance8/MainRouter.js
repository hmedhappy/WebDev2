import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Page0 from './Pages/Page0';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';


export default function MainRouter()
{
    return (
        <div>
            <footer style={{ padding: "50px" }}>
                HEADER
            </footer>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/page1">Page 1</Link>
                            </li>
                            <li>
                                <Link to="/page2">Page 2</Link>
                            </li>
                            <li>
                                <Link to="/page3">Page 3</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Routes>
                        <Route path="/" element={<Page0 />} />
                        <Route path="/page1" element={<Page1 />} />
                        <Route path="/page2" element={<Page2 />} />
                        <Route path="/page3" element={<Page3 />} />

                    </Routes>

                    <footer style={{ padding: "50px" }}>
                        FOOTER
                    </footer>
                </div>
            </Router>
        </div>
    );
}