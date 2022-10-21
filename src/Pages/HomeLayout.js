import React from 'react'
import { NavLink, Outlet } from "react-router-dom"

const HomeLayout = () => {
    return (

        <>
            <nav className='navbar'>
                <h1>Breaking Bad App</h1>

                <div>
                    <NavLink className="link" to="/" end>Homepage</NavLink>
                    <NavLink className="link" to="/quotes" end>Quotes</NavLink>

                </div>


            </nav>

            <Outlet />
            
        </>


    )
}

export default HomeLayout