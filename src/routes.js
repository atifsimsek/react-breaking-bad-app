import Home from "./Pages/Home"
import Quotes from "./Pages/Quotes"

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
                name: "quotes",
                path: "quotes",
                element: <Quotes />

            },
    


        ]

    }


]

export default routes