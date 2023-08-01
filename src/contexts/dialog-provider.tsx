import React, { createContext, useContext, useState } from "react";
import { Props } from "../utils/utils";

export interface IDialogContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  openSuccess: ({ message, subMessage }: { message?: string; subMessage?: string }) => void;
  openFailure: ({ message, subMessage }: { message?: string; subMessage?: string }) => void;
  handleClose: () => void;
  isSuccess: boolean;
  isFailure: boolean;
  message?: string;
  subMessage?: string;
}
const DialogContext = createContext<IDialogContext>({} as IDialogContext);

export const useDialogContext = () => useContext(DialogContext);

const DialogProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [subMessage, setSubMessage] = useState<string | undefined>(undefined);

  const openSuccess = ({ message, subMessage }: { message?: string; subMessage?: string }) => {
    setIsOpen(true);
    setIsSuccess(true);
    setMessage(message);
    setSubMessage(subMessage);
  };

  const openFailure = ({ message, subMessage }: { message?: string; subMessage?: string }) => {
    setIsOpen(true);
    setIsFailure(true);
    setMessage(message);
    setSubMessage(subMessage);
  };
  const handleClose = () => {
    setIsOpen(false);
    setMessage(undefined);
    setIsFailure(false);
    setIsSuccess(false);
  };

  return (
    <DialogContext.Provider
      value={{
        isOpen,
        setIsOpen,
        openSuccess,
        openFailure,
        isFailure,
        isSuccess,
        handleClose,
        message,
        subMessage,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export { DialogContext, DialogProvider };
