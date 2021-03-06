import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeLayout from '../layout/HomeLayout'


const Home = () => {

    const navigate = useNavigate()

    const handleButton = () => {
        navigate('/contact')
    }
    return (
        <HomeLayout>
            <h1>This is a Home page!!!</h1>

            <button onClick={handleButton}> Go to Contact page</button>
        </HomeLayout>
    )
}

export default Home