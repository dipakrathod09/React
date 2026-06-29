import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './Home'
import Shop from './Shop'
import Contact from './Contact';
import NoPage from './NoPage';
function My() {
    return(
        <div>
            <Router >
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Shop" element={<Shop/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
            </Router>
        </div>
    )
}
export default My;