import { Favourites } from "../pages/favourites/Favourites";
import { Home } from "../pages/home/Home";

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
];
