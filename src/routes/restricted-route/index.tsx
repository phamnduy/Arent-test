import { useCallback, useEffect, useLayoutEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { localStorageHelper } from "../../helpers";
import { links } from "../../constants/links";

export const RestrictedRoute = ({
  children,
  restricted = false,
  isPrivate,
  layout: Layout,
  path,
  title,
}: IRestrictedRoute): JSX.Element => {
  const history = useHistory();
  const redirect = useCallback(() => {
    if (restricted && localStorageHelper.isLogin()) {
      history.replace(links.TOP_PAGE);
    }
    // eslint-disable-next-line
  }, [isPrivate, history, restricted]);

  useLayoutEffect(() => {
    redirect();
  }, [redirect]);

  const Component = Layout ? <Layout>{children}</Layout> : children;

  const noTokenRedirect = () => {
    window.location.href = "/login";
  };
  useEffect(() => {
    if (typeof title === "string") {
      document.title = title;
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      path={path}
      render={() => ((localStorageHelper.isLogin() && isPrivate) || !isPrivate ? Component : noTokenRedirect())}
    />
  );
};

interface IRestrictedRoute {
  children?: any;
  restricted?: boolean;
  isPrivate?: boolean;
  layout?: any;
  path?: string | readonly string[];
  title?: string;
}
