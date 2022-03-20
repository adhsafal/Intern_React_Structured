import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Admin from '../components/common/Admin';
import Users from '../components/common/Users';
import UserDetails from '../components/user/UserDetails';

import About from '../pages/About';


import Contact from '../pages/Contact';
import Home from '../pages/Home'
import NoPage from '../pages/NoPage';
import Product from '../pages/Product';
import Profile from '../pages/Profile';
import MenProduct from '../Product/MenProduct';
import WomenProduct from '../Product/WomenProduct';

// const LazyAbout = React.lazy(() => import('../pages/About'))


const RouteLists = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />

            <Route path='/product' element={<Product />}>
                {/* index uses the path same as the parent route */}
                <Route index element={<MenProduct />} />
                <Route path='men' element={<MenProduct />} />
                <Route path='women' element={<WomenProduct />} />
            </Route>
            <Route path='/users' element={<Users />} >
                <Route path=':userId' element={<UserDetails />} />
                <Route path='admin' element={<Admin />} />
            </Route>

            <Route path='*' element={<NoPage />} />

            <Route path='/profile' element={<Profile />} />

        </Routes>
    )
}

export default RouteLists