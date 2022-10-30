import Home from "../pages/Home";
import Static from "../pages/Static"
import Artists from "../pages/Artists";
import Search from "../pages/Search";
import NoMatch from "../pages/NoMatch";

import { songsSidebars } from "./Artists";

let routes = [
  { path: "/", component: Home },
  {path:"/static",component:Static},
  { path: "/CalvinHarris", component: Artists },
  { path: "/search", component: Search },

  { path: "*", component: NoMatch, layout: null },
];

const routesArtists = songsSidebars.map((x) => {
  return {
    path: x.path,
    component: Artists,
  };
});

routes = [...routes, ...routesArtists];

export { routes };
