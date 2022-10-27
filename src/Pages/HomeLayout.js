import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
const HomeLayout = () => {
    return (

        <>
            <nav className='navbar'>
                <h1>Breaking Bad App</h1>

                <div className='link-container'>
                    <NavLink className="link" to="/react-breaking-bad-app/" end>Homepage</NavLink>
                    <NavLink className="link" to="/react-breaking-bad-app/quotes" end>Quotes</NavLink>

                </div>


            </nav>
            <Outlet />

        </>


    )
}

export default HomeLayout