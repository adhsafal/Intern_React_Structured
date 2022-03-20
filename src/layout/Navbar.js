import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/index.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
                <Link to='/about'>About</Link>
                <Link to='/profile'>Profile</Link>
            </div>
        </>
    )
}

export default Navbar