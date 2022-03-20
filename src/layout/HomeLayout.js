import React from 'react'
import Navbar from './Navbar'

const HomeLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default HomeLayout