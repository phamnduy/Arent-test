import React from "react";
import { RouteProps } from "react-router-dom";
import { MainLayout } from "../layouts/main";

import { links } from "../constants/links";
import TopPage from "../pages/top-page";
import MyRecord from "../pages/my-record";
import Column from "../pages/column";

export interface IRoute extends RouteProps {
  restricted?: boolean;
  layout?: React.ComponentType;
  title?: string;
}

const privateRoutes: IRoute[] = [];
const publicRoutes = [
  {
    children: <TopPage />,
    path: links.TOP_PAGE,
    layout: MainLayout,
    restricted: true,
  },
  {
    children: <MyRecord />,
    path: links.MY_RECORD,
    layout: MainLayout,
    restricted: true,
  },
  {
    children: <Column />,
    path: links.COLUMN,
    layout: MainLayout,
    restricted: true,
  },
  {
    children: <TopPage />,
    path: "/",
    layout: MainLayout,
  },
];
const noLayoutRoutes: IRoute[] = [];
interface IConfigRoutes {
  appRoutes: IRoute[] | {};
  isPrivate?: boolean;
  layout?: React.FC;
}

export const configRoutes: IConfigRoutes[] = [
  {
    appRoutes: privateRoutes,
    isPrivate: true,
  },
  {
    appRoutes: noLayoutRoutes,
  },
  {
    appRoutes: publicRoutes,
    layout: MainLayout,
  },
];
