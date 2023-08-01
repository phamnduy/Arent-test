import React, { useContext, useState } from "react";
import { Props } from "../utils/utils";

interface IAuthenticateContext {
  auth: string | null;
  refreshToken: string | null;
  setAuth: React.Dispatch<React.SetStateAction<string | null>>;
  setRefreshToken: React.Dispatch<React.SetStateAction<string | null>>;
}
export const AuthContext = React.createContext<IAuthenticateContext | null>(null);

export const useAuthContext = (): IAuthenticateContext | null => useContext(AuthContext);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth, refreshToken, setRefreshToken }}>{children}</AuthContext.Provider>
  );
};
