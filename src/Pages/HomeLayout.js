import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
const HomeLayout = () => {
    return (

        <>
            <nav>
                <NavLink to="/" end>Anasayfa</NavLink>
                <NavLink to="/users" end>Users</NavLink>
                <NavLink to="/about" end>About</NavLink>
            </nav>

            <Outlet />
        </>


    )
}

export default HomeLayout