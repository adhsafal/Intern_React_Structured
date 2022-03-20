import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams()

    const userId = params.userId

    console.log(params)
    return (
        <>
            <h2>This is details page of user {userId}!!!</h2>
        </>
    )
}

export default UserDetails