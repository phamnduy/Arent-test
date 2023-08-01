import React, { useContext, useState } from "react";
import { IUser } from "../services/user/user.interface";
import { MayBe } from "../types";
import { Props } from "../utils/utils";

export const UserContext = React.createContext<MayBe<IUser>>(null);

export const SetUserContext = React.createContext<React.Dispatch<React.SetStateAction<MayBe<IUser>>>>(() => null);

export const useUser = (): MayBe<IUser> => useContext(UserContext);

export const useSetUser = (): React.Dispatch<React.SetStateAction<MayBe<IUser>>> => useContext(SetUserContext);

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<MayBe<IUser>>(null);
  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>{children}</SetUserContext.Provider>
    </UserContext.Provider>
  );
};
