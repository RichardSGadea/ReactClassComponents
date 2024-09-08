import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


export default class Index extends Component {

    render() {
        return(
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="about-us" element={ <About /> } />
                <Route path="contact" element={ <Contact /> } />
            </Routes>
        )
    }
}