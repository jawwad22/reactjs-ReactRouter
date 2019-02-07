import React from 'react'
import {Link,NavLink,withRouter} from 'react-router-dom'

const Navbar=(props)=>{
//  setTimeout(()=>{
//      props.history.push('/about')
//  },2000)
    return(
        <nav className="nav-wrapper red darkern-3">
            <div className="container">
                <a href="/"className="brand-logo">
                    poke Time
                </a>
                <ul className='right'>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">conatc</NavLink></li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);