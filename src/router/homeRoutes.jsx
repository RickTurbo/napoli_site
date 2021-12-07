import History from "../components/History";
import { Home } from "../components/pages/Home";
import { Crew } from "../components/pages/Crew";
import { Page404 } from "../components/pages/Page404";

import Players from "../components/Players";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    childlen: <Home />,
  },
  {
    path: "players",
    exact: false,
    childlen: <Players />,
  },
  {
    path: "history",
    exact: false,
    childlen: <History />,
  },
  {
    path: "crew",
    exact: false,
    childlen: <Crew />,
  },
  {
    path: "*",
    exact: false,
    childlen: <Page404 />,
  },
];
