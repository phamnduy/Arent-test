import React from "react";
import { NavLink } from "react-router-dom";
import { useAppConfig } from "../../contexts/app-provider";
import { useSetUser, useUser } from "../../contexts/user-provider";
import { localStorageHelper } from "../../helpers";
import { ButtonLanguageList } from "./components/button-language-list";
import { useHandleLanguage } from "./hooks/use-custom-translation";
import { Button } from "@mui/material";
// import { Button } from 'src/components';

export const Home = (): JSX.Element => {
  const { t } = useHandleLanguage();
  const user = useUser();
  const setUser = useSetUser();
  const appConfig = useAppConfig();
  const arr = [];
  for (let i = 5; i < 21; i++) {
    arr.push(i);
  }

  function logout() {
    localStorageHelper.removeItem(process.env.REACT_APP_ACCESS_TOKEN_KEY!);
    setUser(null);
  }

  return (
    <div>
      <h1>{t("description.title")} </h1>
      <h2>{appConfig?.appName}</h2>
      <div>
        <ButtonLanguageList />
        {!user ? (
          <NavLink to="/login">
            <Button size="small">{t("login")} </Button>
          </NavLink>
        ) : (
          <Button onClick={logout} size="small">
            {t("logout")}
          </Button>
        )}
        <NavLink to="/private">
          <Button variant="outlined">{t("private")}</Button>
        </NavLink>
        <NavLink to="/">
          <Button>{t("home")}</Button>
        </NavLink>
        <Button size="large">{t("private")}</Button>
      </div>
      {user && (
        <p>
          {t("hi")}, {user.username}
        </p>
      )}
    </div>
  );
};
