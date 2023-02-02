import React from 'react'
import './NavbarStyles.css'
const Navbar = () => {
    return (
        <div className='nav'>
            <div className="icon">
                <strong>BR</strong> Architects
            </div>
            <div className="menu">
                <a className='links' href="#">Projects</a>
                <a className='links' href="#">About</a>
                <a className='links' href="#">Contact</a>
            </div>
        </div>
    )
}

export default Navbar