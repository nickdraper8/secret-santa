import React from 'react';
import "./nav.css";

function Nav() {
    return(
        <>
        <nav>
            <h2>Created by Nick Draper</h2>
            <h1>Secret Santa Generator</h1>
            <div id="nav-links">
                <a href="https://github.com/nickdraper8"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/nicholas-draper/"><i className="fab fa-linkedin"></i></a>
                <a href="https://nickdraper8.github.io/portfolio-page/"><i className="fas fa-address-card"></i></a>
            </div>
        </nav> 
        <h3>You are running this application in <i>{process.env.NODE_ENV}</i> mode.</h3>
        </>   
    )
};

export default Nav;