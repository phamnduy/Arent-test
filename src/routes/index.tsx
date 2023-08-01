import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Page404 } from "../pages/page-404";
import { configRoutes } from "./config";
import { RestrictedRoute } from "./restricted-route";
import ScrollToTopFab from "../components/scroll-to-top";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {configRoutes.map(({ appRoutes, isPrivate, layout: MainLayout }) => {
          return (
            Array.isArray(appRoutes) &&
            appRoutes.map(({ children, path, layout, ...props }, index) => {
              return (
                <RestrictedRoute key={index} isPrivate={isPrivate} path={path} layout={layout || MainLayout} {...props}>
                  {children}
                  <ScrollToTopFab />
                </RestrictedRoute>
              );
            })
          );
        })}
        <RestrictedRoute>
          <Page404 />
        </RestrictedRoute>
      </Switch>
    </BrowserRouter>
  );
};
