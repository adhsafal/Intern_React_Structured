import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HomeLayout from '../layout/HomeLayout'

const Product = () => {
    return (
        <HomeLayout>
            <h1>This is a product page!!!</h1>

            <div className="productNav">
                <Link to='men'>Men</Link>
                <Link to='women'>Women</Link>
            </div>

            {/* Outlet Renders the component corresponding to the 
            matching child route from the parent lists of routes */}
            <Outlet />
        </HomeLayout>
    )
}

export default Product