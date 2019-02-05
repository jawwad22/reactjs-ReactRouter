import React from 'react'

const Navbar=()=>{

    return(
        <nav className="nav-wrapper red darkern-3">
            <div className="container">
                <a href="/"className="brand-logo">
                    poke Time
                </a>
                <ul className='right'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">conatc</a></li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;