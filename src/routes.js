import Home from "./Pages/Home"
import Users from "./Pages/Users"
import About from "./Pages/About"
import HomeLayout from "./Pages/HomeLayout"



const routes = [
    {
        name: "home",
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                name: "index",
                index: true,
                element: <Home />

            },
            {
                name: "users",
                path: "users",
                element: <Users />

            },
            {
                name: "about",
                path: "about",
                element: <About />

            },


        ]

    }


]

export default routes