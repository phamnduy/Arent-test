import React, { useContext, useState } from "react";
import { IAppConfig } from "../services/app-config-example/app-config.interface";
import { MayBe } from "../types";
import { Props } from "../utils/utils";

export const AppConfigContext = React.createContext<MayBe<IAppConfig>>(null);

export const SetAppConfigContext = React.createContext<React.Dispatch<React.SetStateAction<MayBe<IAppConfig>>>>(
  () => null
);

export const useAppConfig = (): MayBe<IAppConfig> => useContext(AppConfigContext);

export const useSetAppConfig = (): React.Dispatch<React.SetStateAction<MayBe<IAppConfig>>> =>
  useContext(SetAppConfigContext);

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [user, setApp] = useState<MayBe<IAppConfig>>(null);
  return (
    <AppConfigContext.Provider value={user}>
      <SetAppConfigContext.Provider value={setApp}>{children}</SetAppConfigContext.Provider>
    </AppConfigContext.Provider>
  );
};
