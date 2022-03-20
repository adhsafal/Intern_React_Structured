import React from 'react'
import { Link, Outlet, useResolvedPath, useSearchParams } from 'react-router-dom'
import HomeLayout from '../../layout/HomeLayout'

const User = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const showActiveUsers = searchParams.get('filter') === 'active'

    const handleActiveUsers = () => {
        setSearchParams({ filter: 'active' })
    }

    const handleAllUsers = () => {
        setSearchParams({})
    }

    let peoples = [
        {
            name: 'Ram',
            id: 1
        },
        {
            name: 'Shyam',
            id: 2
        },
        {
            name: 'Hari',
            id: 3
        },
    ]

    return (
        <HomeLayout>
            {peoples.map((items, index) =>
                <div key={index}>
                    <Link to={`${items.id}`}>{items.name}</Link>
                </div>
            )}
            <Outlet />

            <button onClick={handleActiveUsers}>Active Users</button>
            <button onClick={handleAllUsers}>Reset Filters</button>

            {
                showActiveUsers ? <h2>Active Users</h2> : <h2>Showing all users</h2>
            }

        </HomeLayout>
    )
}

export default User