import React from 'react';

import './Toolbar.css';


const Toolbar = props => (
    <header className = "toolbar">
        <nav className = "toolbar_navBar">
            <div className = "toolbar_logo"><a href="/">CLICKY GAME</a></div>
            <div className = "space" />
            <div className = "toolbar_navBarItem">
                <ul>
                    <li>Score</li>
                    <li>||</li>
                    <li >{props.result}</li>
                    
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;