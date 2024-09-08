import React, { Component } from 'react';

class Navigation extends Component {

    render() {
        return (
            <nav className='container-fluid d-flex'>
                <div className='col-4'>
                    <a href='/'>Home</a>
                </div>
                <div className='col-4'>
                    <a href='/about-us'>About</a>
                </div>
                <div className='col-4'>
                    <a href='/contact'>Contact</a>
                </div>
            </nav>
        )
    }
}

export default Navigation;