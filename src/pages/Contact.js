import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeLayout from '../layout/HomeLayout'

const Contact = () => {

    const navigate = useNavigate()

    const handleButton = () => {
        navigate('/')
    }
    return (
        <HomeLayout>
            <h1>This is a contact page!!!</h1>
            <button onClick={handleButton}>Go Back to Home</button>
        </HomeLayout>
    )
}

export default Contact