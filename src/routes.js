import Home from "./Pages/Home"
import Quotes from "./Pages/Quotes"
import CharacterDetail from "./Pages/CharacterDetail"
import HomeLayout from "./Pages/HomeLayout"



const routes = [
    {
        name: "home",
        path: "/react-breaking-bad-app/",
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
            {
                name: "character-detail",
                path: "character/:id",
                element: <CharacterDetail />
            }



        ]

    }


]

export default routes