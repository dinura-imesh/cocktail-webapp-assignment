import { Favourites } from "../pages/favourites/Favourites";
import { Home } from "../pages/home/Home";
import { Search } from "../pages/search/Search";

export const routes = [
  {
    name: "Home",
    path: "/",
    component: () => <Home />,
  },
  {
    name: "Favourites",
    path: "/favourites",
    component: () => <Favourites />,
  },
  {
    name: "Search",
    path: "/search",
    component: () => <Search />,
  },
];
