import { memo } from "react";
import { Route, Switch } from "react-router";

import { homeRoutes } from "./homeRoutes";

export const Router = memo(() => {
  return (
    <Switch>
      <Route
        path="/"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.pate}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.childlen}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
    </Switch>
  );
});
